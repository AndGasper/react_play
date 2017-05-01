import axios from 'axios';
const loginUserMiddleWare = store => next => action => {
// LOGIN_REQUEST = loginRequest
switch(action.type) {
    case LOGIN_REQUEST:
        console.log("action.type LOGIN_REQUEST", LOGIN_REQUEST);
        axios.get(`http://${SERVER}/${USER_TABLE}/${action.payload}`)
            .then(response => response.data)
            .then(user => store.dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            }))
            .catch(error => {
                console.error(error); // log error
                store.dispatch({
                    type: LOGIN_FAILURE,
                    payload: error,
                    error: true
                });
                return next(action);
            });
    default:
        return next(action); // Return the original action
            }
})


}