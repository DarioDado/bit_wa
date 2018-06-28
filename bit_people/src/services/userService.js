import { constants } from '../shared/constants';
import { User } from '../entities/User';

export const getUsers = () => {
    return fetch(constants.mainEndPoint)
        .then(res => res.json())
        .then(usersData => {
            console.log(usersData);
            return usersData.results.map(user => {
                return new User (user.id, user.gender, user.picture, user.name.first, user.name.last, user.email, user.dob.date);
            });
        });
}

export const saveUsers = users => {
    // console.log(users);
    window.localStorage.setItem('users', JSON.stringify(users));
}

export const getUsersFromStorage = () => {
    const users = JSON.parse(window.localStorage.getItem('users'));
    // console.log(users);
    if (!users) {
        return false;
    } else {
        return users.map(user => {
            return new User (user.id, user.gender, user.avatar, user.firstName, user.lastName, user.email, user.dob);
        });
    }
}

export const setViewMode = view => {
    window.localStorage.setItem('gridLayout', view);
}

export const getViewMode = () => {
    return JSON.parse(window.localStorage.getItem('gridLayout'));
}

export const setLastUpdate = () => {
    const date = new Date();
    window.localStorage.setItem('lastUpdate', date);
}

export const getLastUpdate = () => {
    return window.localStorage.getItem('lastUpdate')
        ? new Date(window.localStorage.getItem('lastUpdate'))
        : false;
}

export const getGenderStats = (users) => {
    let male = 0;
    let female = 0;

    users.forEach(user => {
        if (user.gender === 'female') {
            female += 1;
        } else {
            male += 1;
        }
    })

    return {male, female};

}
