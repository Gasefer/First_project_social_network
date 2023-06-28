import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        ProfilePage: {
            posts: [
                { id: 1, message: ' Hi', likesCount: 4 + " " + 134 + " " + 213 },
                { id: 2, message: ' I love you', likesCount: 1 + " " + 343 + " " + 211 },
                { id: 2, message: ' Anya', likesCount: 1 + " " + 231 + " " + 313 }
            ],
            newPostText: ''
        },
        DialogsPage: {
            DialogsData: [
                { id: 1, name: 'Anya' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Oksana' },
                { id: 4, name: 'Volodymyr' },
                { id: 5, name: 'Raisa' },
                { id: 6, name: 'Victor' },
            ],

            MessagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'I kill you!' },
                { id: 3, message: 'I kill you too!' },
                { id: 4, message: 'I kill you!' },
                { id: 5, message: 'I kill you too!' },
            ],
            NewMessageBody: ''

        },
        Sidebar: {

        }
    },
    _callSubscriber() {
        console.log('asdasu')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
        this._state.Sidebar = sidebarReducer(this._state.Sidebar, action)
        this._callSubscriber(this._state)

    }
}
export default store;