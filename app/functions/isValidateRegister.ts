
export const isValidateRegister = (password: string, email: string, setWarningPassword: ((arg0: boolean) => void), setWarningEmail: ((arg0: boolean) => void)) => {
    let isProceed = true;
    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-={};':"|,.<>?]).{8,}$/.test(password)) {
        isProceed = false;
        setWarningPassword(true)
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        isProceed = false;
        setWarningEmail(true);
    }
    return isProceed;
}