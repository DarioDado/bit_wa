export class User {
    constructor(avatar, firstName, lastName, email, dob) {
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = new Date (dob);
    }

    hideEmail() {
        const emailArr = this.email.split("@");
        const firstThreeLetters = emailArr[0].slice(0,3);
        const lastThreeLetters = emailArr[0].slice(-3);
        return `${firstThreeLetters}...${lastThreeLetters}@${emailArr[1]}`;
    }
}