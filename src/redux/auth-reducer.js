import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'my-network/auth/SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userPhoto: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhoto: action.userPhoto
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const setUserPhoto = (userPhoto) => ({type: SET_USER_PHOTO, userPhoto});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));

        let data = await profileAPI.getProfile(id);
        dispatch(setUserPhoto(data.photos.small));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, true);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }

};
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

};


export default authReducer;