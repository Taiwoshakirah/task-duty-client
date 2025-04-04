import { createContext, useState } from "react";
// import PropTypes from "prop-types";
import axiosInstance from "../utils/AxioInstance";

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(()=>{
      return JSON.parse(localStorage.getItem('token')) || null
    })

    const signUpUser = async(formData, props)=>{
        //send request to server with form data
        try {
            const {data} = await axiosInstance.post('/api/auth/signup',formData)
        console.log(data);
        setToken(data.token)
        localStorage.setItem("token", JSON.stringify(data.token))
        props.onHide()
        } catch (error) {
            console.log(error);
            
        }
        

    }

    const signInUser = async(formData, props)=>{
        //send request to server with form data
        try {
            const {data} = await axiosInstance.post('/api/auth/signin',formData)
        console.log(data);
        setToken(data.token)
        localStorage.setItem("token", JSON.stringify(data.token))
        props.onHide()
        } catch (error) {
            console.log(error);
            
        }
        

    }
    const contextData = {
        name:'Shakirah',
        token,
        signInUser,
        signUpUser
    }
    return<AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
}

// export const AuthProvider = ({children})=>{
//     const [token, SetToken] = useState(()=>{
//         return JSON.parse(localStorage.getItem("token"))||null
    
//     })
//     AuthProvider.propTypes = {
//         children: PropTypes.node.isRequired, // This validates the `children` prop
//       };

// const signInUser =async (formData, onHide)=>{
//     try {
//         const {data} = await axiosInstance.post('/api/auth/signin', formData)
//         console.log(data);
//     SetToken(data.token)
//     localStorage.setItem("token",JSON.stringify(data.token))
//     if (onHide) onHide();
//     // props.onHide()
//     } catch (error) {
//         console.log(error);
//     }

// }
// const signUpUser = async (formData, onHide) => {
//     try {
//       const { data } = await axiosInstance.post('/api/auth/register', formData);
//       console.log(data);
  
//       SetToken(data.token);
//       localStorage.setItem("token", JSON.stringify(data.token));
//     //   props.onHide()
//     if (onHide) onHide();
  
//       return data; 
//     } catch (error) {
//       console.error("Signup error:", error);
//       throw error; 
//     }
//   };
  



//     const contextData = {
//         name:"shakirah",
//         token:token,
//         signInUser,
//         signUpUser
//     }
//     return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
// }