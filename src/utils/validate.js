export const validateForm = (email,password)=>{

    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmail) return "Email is not Valid"
    if(!isPassword) return "Password is not Valid"

    return null;
}