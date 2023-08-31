const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';


//     { id: 1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykad-Igwc7WiUukGcOTLKU3tIEsnjMkuIew&usqp=CAU',
//  followed: false, fullName: 'Oleh K.', status: 'I am a developer', location: { country: 'Ukraine', city: 'Lutsk' } },
// { id: 2, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykad-Igwc7WiUukGcOTLKU3tIEsnjMkuIew&usqp=CAU',
//  followed: true, fullName: 'Denys R.', status: 'I am a developer', location: { country: 'USA', city: 'Rivne' } },
// { id: 3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykad-Igwc7WiUukGcOTLKU3tIEsnjMkuIew&usqp=CAU',
//  followed: true, fullName: 'Maksim K.', status: 'I am a developer', location: { country: 'Ukraine', city: 'Kyiv' } },
// { id: 4, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykad-Igwc7WiUukGcOTLKU3tIEsnjMkuIew&usqp=CAU',
//  followed: false, fullName: 'Andriy O.', status: 'I am a developer', location: { country: 'Brasil', city: 'Lviv' } },

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
            case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching 
                ? [ ...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id=>id!=action.userId)
            }
        default:
            return state;
    };
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId })
export default usersReducer;