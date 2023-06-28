const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: ' Hi', likesCount: 4 + " " + 134 + " " + 213 },
        { id: 2, message: ' I love you', likesCount: 1 + " " + 343 + " " + 211 },
        { id: 2, message: ' Anya', likesCount: 1 + " " + 231 + " " + 313 }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.NewText
            }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    };
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, NewText: text })

export default profileReducer;