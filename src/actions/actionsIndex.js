import {LOGIN_REQUEST} from './actionTypes';
import {LOGIN_SUCCESS} from './actionTypes';
import {LOGIN_FAILURE} from './actionTypes'; // II do not think I technically need a third action.


export function sendLoginInfo(credentials) {
    return {
        type: 'LOGIN_REQUEST'
    }

}


// Option 1: dispatching from the action creator
// Ups: Simple and works
// Downs: Cannot access global state to influence decisions
// const fetchUser = (dispatch, id) => {
//     dispatch({ type: USER_FETCH, payload: id });
//     axios.get(`https://server/user/${id}`)
//         .then(resp => resp.data)
//         .then(user => dispatch({ type: USER_FETCH_SUCCESS,
//             payload: user }))
//         .catch(err => {
//             console.error(err); // log since might be a render err
//             dispatch({ type: USER_FETCH_FAILED,
//                 payload: err,
//                 error: true });
//         });
// };