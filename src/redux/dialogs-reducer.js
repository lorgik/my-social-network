const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Robert'},
        {id: 3, name: 'Marat'},
        {id: 4, name: 'Ilira'},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What is the hell?'},
        {id: 3, message: 'Go play games!'},
        {id: 4, message: 'Tik'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}]
            };
        default:
            return state;
    }
}

export const addMessageCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;