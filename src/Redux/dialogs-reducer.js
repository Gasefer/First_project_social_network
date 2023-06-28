const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                NewMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.NewMessageBody;
            return {
                ...state,
                NewMessageBody: '',
                MessagesData: [...state.MessagesData, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;