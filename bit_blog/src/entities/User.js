export class User {
    constructor(userData) {
        this.id = userData.id;
        this.name = userData.name;
        this.username = userData.username;
        this.email = userData.email;
        this.address = userData.address;
        this.phone = userData.phone;
        this.company = userData.company;
    }
}