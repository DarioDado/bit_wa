import { constants } from '../shared/constants';
import { User } from '../entities/User';

export const getUsers = () => {
    return fetch(constants.mainEndPoint)
        .then(res => res.json())
        .then(usersData => {
            return usersData.results.map(user => {
                return new User (user.id, user.gender, user.picture, user.name.first, user.name.last, user.email, user.dob);
            });
        });
}

export const saveUsers = users => {
    window.localStorage.setItem('users', JSON.stringify(users));
}

export const getUsersFromStorage = () => {
    const users = JSON.parse(window.localStorage.getItem('users'));
    console.log(users);
    if (!users) {
        return false;
    } else {
        return users.map(user => {
            return new User (user.id, user.gender, user.avatar, user.firstName, user.lastName, user.email, user.dob);
        });
    }
}

export const setViewMode = view => {
    window.localStorage.setItem('view', view);
}

export const getViewMode = () => {
    return window.localStorage.getItem('view');
}

export const setLastUpdate = () => {
    const date = new Date();
    window.localStorage.setItem('lastUpdate', date);
}

export const getLastUpdate = () => {
    return new Date(window.localStorage.getItem('lastUpdate'));
}
