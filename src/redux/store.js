import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: 'Hello, how to you?', likesCount: '15'},
        {id: 2, message: "It's my first post!", likesCount: '21'},
      ],
      newPostText: '',
    },
    dialogsPage: {
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
      ],
      newMessageBody: '',
    },
    sidebar: {
      friendsData: [
        {id: 1, name: 'Max', avatar: '"https://sun2.ufanet.userapi.com/s/v1/ig2/wwxAZFpS86zkC3znoXx_krtoZqPBfMRcZLx7qpnL8r1WIio90A_HdbdyKRsDXsTe-muK2Abwevp4U0xRdd_1CQdc.jpg?size=200x200&quality=96&crop=348,326,602,602&ava=1"'},
        {id: 2, name: 'Robert', avatar: 'https://sun1.ufanet.userapi.com/s/v1/if1/X9Uh4JDXsrWEmY8iCwAS1Y9D16PXNyTAVmax0UAdmVvgqIhPtT85FyizfNVeoosrnb0hbIWx.jpg?size=200x200&quality=96&crop=0,37,960,960&ava=1'},
        {id: 3, name: 'Ilira', avatar: 'https://sun2.ufanet.userapi.com/s/v1/ig2/jT7IA1O7CgNN8pAIn6N7PdFxPr9QU-xMUgFqLAYwLX-RxWiHziZD18tLZbUwWzPxvGn2W1hiSguKIj71fvHQuePC.jpg?size=200x200&quality=95&crop=17,360,1497,1497&ava=1'},
      ],
    }
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;