import axios from 'axios'
import {LOGIN_USER,REGISTER_USER,AUTH_USER, LOGOUT_USER,NAME_USER,PASSWORD_USER,DELETE_TEST,REGISTER_SUMMARY,
    REGISTER_AI,GET_SUMMARY,GET_MY_SUMMARY,GET_ALL_SUMMARY,GET_QUIZ,SEND_ANSWER} from './type'
import { USER_SERVER } from '../config';


export const loginUser=(dataToSubmit)=>{
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
    .then(response => response.data)
    return{
        type: LOGIN_USER,
        payload: request
    }
}

export const registerUser=(dataToSubmit)=>{
   
    const request = axios.post(`${USER_SERVER}/signup`,dataToSubmit)
    .then(response => response.data)

    return{
        type: REGISTER_USER,
        payload: request
    }
}

export const registerSummary=(dataToSubmit)=>{
    const request = axios.post(`${USER_SERVER}/summary`,dataToSubmit,{
        headers: {
            authorization: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }})
    .then(response => response.data)
    return{
        type: REGISTER_SUMMARY,
        payload: request
    }
}
export const getQuiz=(quiz_type, summary_id) => {
    const request = axios.get(`${USER_SERVER}/quiz?quiz_type=${quiz_type}&summary_id=${summary_id}`,{
        headers: {
            authorization: window.localStorage.getItem('jwt')
        }
    })
    .then(response => response.data)
    return{
        type: GET_QUIZ,
        payload: request
    }
}

export const sendAnswer=(dataToSubmit)=>{
    const request = axios.post(`${USER_SERVER}/scoring`,dataToSubmit, {
        headers:{
            authorization: window.localStorage.getItem('jwt')
        }
    })
    .then(response => response.data)
    return{
        type:SEND_ANSWER,
        payload: request
    }
}

export const registerAI=(dataToSubmit)=>{
    const request = axios.post(`${USER_SERVER}/qna`,dataToSubmit,{
        headers: {
            authorization: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }})
    .then(response => response.data)
    return{
        type: REGISTER_AI,
        payload: request
    }
}



export const auth=()=>{
    const request = axios.get(`${USER_SERVER}/mypage`, {
        headers: {
            authorization: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: AUTH_USER,
        payload: request
    }
}

export const getSummary=(summary_id)=>{ 
    const request = axios.get(`${USER_SERVER}/summary?summary_id=${summary_id}`, {
        headers: {
            authorization: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: GET_SUMMARY,
        payload: request
    }
}


export const getMySummary=()=>{ 
    const request = axios.get(`${USER_SERVER}/userSummary`, {
        headers: {
            authorization: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: GET_MY_SUMMARY,
        payload: request
    }
}
export const getAllSummary=()=>{ 
    const request = axios.get(`${USER_SERVER}/allSummary`)
    .then(response => response.data)
    return{
        type: GET_ALL_SUMMARY,
        payload: request
    }
}



export const changeName=(dataToSubmit)=>{
    const request = axios.put(`${USER_SERVER}/nickname`,dataToSubmit, {
        headers: {
          jwt: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: NAME_USER,
        payload: request
    }
}

export const changePassword=(dataToSubmit)=>{
    const request = axios.put(`${USER_SERVER}/password`,dataToSubmit, {
        headers: {
          jwt: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: PASSWORD_USER,
        payload: request
    }
}



export const deleteTest=(id)=>{
    const request = axios.delete(`http://3.35.187.65:3000/test/${id}`, {
        headers: {
          jwt: window.localStorage.getItem('jwt') //the token is a variable which holds the token'
        }
       })
    .then(response => response.data)
    return{
        type: DELETE_TEST,
        payload: request
    }
}

export const logoutUser=()=>{
    return {
        type: LOGOUT_USER,
        payload: null
    }
}
