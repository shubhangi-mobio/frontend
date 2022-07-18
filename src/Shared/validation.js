export const authSingIn = (data) => {

    const errors = {};

    //Email
    if (!/([^\s])/.test(data["email"])) errors["email"] = "Email Id is Required.";
    else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data["email"]
    ) && data["email"].length > 0) {
        errors["email"] = "Enter Valid Email Id";
    }
    else if (/\s/g.test(data["email"])) errors["email"] = "Enter Valid Email Id";

    //Password
    // if (!/([^\s])/.test(data["password"])) errors["password"] = "Password is Required";
    // else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/.test(data["password"])) {
    //     errors["password"] = "Invalid Credentials Please Check Email And Password";
    // }
    // else if (!/^(?=.*?[0-9])/i.test(data["password"])) {
    //     errors["password"] = "Invalid Credentials Please Check Email And Password";
    // }
    else if (data['password'].length <= 8) {
        errors['password'] = 'Invalid Credentials Please Check Email And Password'
    }
    //  else if (/\s/g.test(data["password"])) errors["password"] = "Invalid Credentials Please Check Email And Password";


    return Object.keys(errors).length === 0 ? null : errors;
}

export const authForgot = (data) => {

    const errors = {};

    //Email
    if (!/([^\s])/.test(data["email"])) errors["email"] = "Email Id is Required.";

    else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data["email"]
    ) && data["email"].length > 0) {
        errors["email"] = "Enter Valid Email Id";
    }
    else if (/\s/g.test(data["email"])) errors["email"] = "Enter Valid Email Id";

    return Object.keys(errors).length === 0 ? null : errors;
}

export const authReset = (data) => {

    const errors = {};
    //Set password
    if (!/([^\s])/.test(data["password"])) errors["password"] = "Password is Required.";
    // else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/.test(data["password"])) {
    //     errors["password"] = "Enter Valid Password";
    // }
    else if (!/^(?=.*?[0-9])/i.test(data["password"])) {
        errors["password"] = "Enter Valid Password";
    }
    else if (data['password'].length <= 8) {
        errors['password'] = 'Enter Valid Password'
    }
    else if (/\s/g.test(data["password"])) errors["password"] = "Enter Valid Password";

    //Confirm password
    if (!/([^\s])/.test(data['confirmPassword'])) errors["confirmPassword"] = "Please re-enter the new password to confirm it.";

    // else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/.test(data["confirmPassword"])) {
    //     errors["confirmPassword"] = "Enter Valid Password";
    // }
    else if (!/^(?=.*?[0-9])/i.test(data["confirmPassword"])) {
        errors["confirmPassword"] = "Enter Valid Password";
    }
    else if (data['confirmPassword'].length <= 8) {
        errors['confirmPassword'] = 'Enter Valid Password'
    }
    else if (/\s/g.test(data["confirmPassword"])) errors["confirmPassword"] = "Empty space are not allowed.";
    // else if (data['confirmPassword'].length < 4 && data['confirmPassword'].length > 0) {
    //     errors['confirmPassword'] = 'Enter Valid Password'
    // }

    else if (data['newpassword'] !== data['confirmPassword'] && data['confirmPassword'].length > 0) {
        errors['confirmPassword'] = 'Password value does not match.'
    }

    return Object.keys(errors).length === 0 ? null : errors;
}