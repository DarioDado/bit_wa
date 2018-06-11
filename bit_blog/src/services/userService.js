import { getData } from './fetchService';
import { endPoints } from '../shared/constants';
import { User } from '../entities/User';

export const getUsers = () => {
    return getData(endPoints.getUsers)
        .then(usersData => {
            return usersData.map(userData => {
                return new User (userData);
            });
        });
}

export const getSingleUser = (id) => {
    const endPoint = `${endPoints.getUsers}/${id}`;
    return getData(endPoint)
        .then(userData => new User(userData));
}