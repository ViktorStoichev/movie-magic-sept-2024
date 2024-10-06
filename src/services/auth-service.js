import User from "../models/User.js"


const register = (email, password) => {
    return User.create({email, password})
    
}

export const authService = {
    register
}