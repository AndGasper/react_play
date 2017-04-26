const DEFAULT_STATE = {auth: false, user: {}};
export default function(state= DEFAULT_STATE, action) {
    switch(action.type) {
        case 'sign_in':
            return {...state, signedIn: action.payload};
        case 'sign_out':
            return {...state, auth: false, user: {}};
        default:
            return state;
    }
}
