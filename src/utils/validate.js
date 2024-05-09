export const validateForm = (email,password,name)=>{

    // const isName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const isEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 
    // if(!isName) return "Name is not valid"
    if(!isEmail) return "Email is not valid"
    if(!isPassword) return "Password is not valid"
   

    return null;
}