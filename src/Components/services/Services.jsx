import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = "https://tender-pleat-crab.cyclic.app"
// const loggedUser = JSON.parse(localStorage.getItem("user"))

const setConfig = ()=>{

    return 
}

export const signUp = (firstName, lastName, email, password, phoneNumber)=>{
    axios.post(`${api}/users/sign-up`, {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
    } , setConfig())
    .then(res => {
        if(res.data.token){
            toast("Signed Up Successfully", { hideProgressBar: true, autoClose: 2000, type: 'success' })
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            console.log(res.data)
            window.location.pathname = "/"
        }
        else{
            console.log(res.data)
        }
    })
    .catch(err => {
        toast(err.message, { hideProgressBar: true, autoClose: 2000, type: 'error' })
        console.error(err)})
}

export const signIn = (email, password)=>{
    axios.post(`${api}/users/sign-in`, {email, password}, setConfig())
    .then(res => {
        if(res.data.token){
            toast("Signed In Successfully", { hideProgressBar: true, autoClose: 2000, type: 'success' })
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            console.log("User signed")
            window.location.pathname = "/"
        }
        else{
            console.log(res.data)
        }
        
    })
    .catch(err => {
        toast(err.message, { hideProgressBar: true, autoClose: 2000, type: 'error' })
        console.error(err)})
}

export const getAProperty = (id)=>{
    axios.get(`${api}/property/${id}`)
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
}

export const createRequest = (name, email, phoneNumber, message)=>{
    axios.post(`${api}/request/`)
    .then(res => {
        console.log(res.data)
        toast(res.data, { hideProgressBar: true, autoClose: 2000, type: 'success' })
        // toast("hey")
    })
    .catch(err =>{
         console.error(err)
         toast(err.message, { hideProgressBar: true, autoClose: 2000, type: 'error' })
        })
}

export const getAllProperties = async ()=>{
    try{
        let result =await axios.get(`${api}/property/all`)
        return result;
    }
    catch(err) 
    {return err.message}
}

export const getAllVisa = async ()=>{
    try{
        let result =await axios.get(`${api}/visa/all`)
        return result
    }
    catch(err) 
    {return err.message}
}

