import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_FRIEND,
    DELETE_FRIEND,
    UPDATE_FRIEND
} from '../actions';

const initialState = {
    friends: [],
    error: '',
    fetchingData: false,
    loggingIn: false,
};

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return{
                ...state,
                error: '',
                loggingIn: true,
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                error: '',
                loggingIn: false,
            };
        case FETCH_DATA_START:
            return{
                ...state,
                error: '',
                fetchingData: true,
            };
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                fetchingData: false,
                error: '',
                friends: action.payload
            };
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                fetchingData: false,
                error: action.payload
            };
            case ADD_FRIEND:
            return{
                ...state,
                friends: action.payload
            }
            case DELETE_FRIEND:
            return{
                ...state,
                friends: action.payload
            }
            case UPDATE_FRIEND:
            return{
                ...state,
                friends: action.payload
            }
        default:
        return state;
    }
};

export default reducer;