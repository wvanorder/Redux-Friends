import axios from 'axios';

import { axiosWithAuth } from '../utilities/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        .post('/login', creds)
        .then(res => {
            console.log('token', res.data.payload);
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS });
            return true;
        })
        .catch(err => console.log('I cant let you do that, Star Fox', err.response));
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => dispatch => {
    axiosWithAuth()
    .get('/friends')
    .then(res => {
        console.log('YO', res);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_DATA_FAILURE, payload: err})
    })
};

export const ADD_FRIEND = 'ADD_FRIEND';

export const addFriend = (newFriend) => dispatch => {
    axiosWithAuth()
    .post('http://localhost:5000/api/friends', newFriend)
    .then(res => {
        console.log('NewFriend added', res.data)
        dispatch({type: ADD_FRIEND, payload: res.data})
    })
    .catch(err=> {
        console.log('ya didnt add correctly', err)
    });
};

export const DELETE_FRIEND= 'DELETE_FRIEND';

export const deleteFriend = id => dispatch => {
    axiosWithAuth()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
        dispatch({ type: DELETE_FRIEND, payload: res.data})
    })
    .catch(err => console.log(err));
 }