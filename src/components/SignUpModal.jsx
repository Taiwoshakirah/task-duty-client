import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import AuthContext from '../context/AuthContext';

const SignUpModal = (props) => {
    const {signUpUser} = useContext(AuthContext);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
const handleSubmit = (e)=>{
    e.preventDefault()
    signUpUser({username, email, password}, props)    
}



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={handleSubmit} className='d-flex flex-column gap-4 p-5' action="">
        <h2 className='text-start'>Sign Up</h2>
        <div>
            <input className='w-100 border rounded-3 py-3 px-2' type="text" placeholder='Username' 
            onChange={(e)=>{
                setUsername(e.target.value)
            }}/>
        </div>
        <div>
            <input className='w-100 border rounded-3 py-3 px-2' type="text" placeholder='Email'
            onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
        </div>
        <div>
            <input className='w-100 border rounded-3 py-3 px-2' type="text" placeholder='Password'
            onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
        </div>
        <button className='btn bg-primary text-white'>Sign Up</button>

        <p>Already have an account? <a href="#" onClick={()=>{
            props.onSwap()
            props.onHide()
        }}>Login</a></p>
      </form>
      
    </Modal>
  )
}

export default SignUpModal