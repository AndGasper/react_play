import {user1} from '../data/users';

export function signin(auth) {
    if (auth) {
        return {
            type: 'sign_in',
            payload: user1
        }
    }
    return {
        type: 'sign_out'
    }
}