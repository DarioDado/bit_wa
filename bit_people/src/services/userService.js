import { constants } from '../shared/constants';
import { User } from '../entities/User';

export const getUsers = () => {
    return fetch(constants.mainEndPoint)
        .then(res => res.json())
        .then(usersData => {
            return usersData.results.map(user => {
                return new User (user.id, user.picture, user.name.first, user.name.last, user.email, user.dob)
            })
        })
        .catch(err => "Network problem")
}