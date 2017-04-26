import {users} from '../data/users';

export function signin(auth, username) {
    const user = users[username];
    if (auth && username) {
        return {
            type: 'sign_in',
            payload: user
        }
    }
    return {
        type: 'sign_out'
    }
}