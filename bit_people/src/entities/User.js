export class User {
    constructor(id, gender, avatar, firstName, lastName, email, dob) {
        this.id = id;
        this.gender = gender;
        this.avatar = avatar;
        this.firstName = firstName[0].toUpperCase() + firstName.substr(1);
        this.lastName = lastName[0].toUpperCase() + lastName.substr(1);
        this.email = email;
        this.dob = new Date (dob);
    }

    getId() {
        return this.id.name + this.id.value;
    }
    hideEmail() {
        const emailArr = this.email.split("@");
        const firstThreeLetters = emailArr[0].slice(0,3);
        const lastThreeLetters = emailArr[0].slice(-3);
        return `${firstThreeLetters}...${lastThreeLetters}@${emailArr[1]}`;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getFormatedDate() {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const dateString = this.dob.toLocaleDateString("en-US", options);
        const dateArr = dateString.split('/');
        return `${dateArr[1]}.${dateArr[0]}.${dateArr[2]}`;

    }
}
