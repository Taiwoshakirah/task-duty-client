import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import AuthContext from '../context/AuthContext';

const LoginModal = (props) => {
    const {signInUser} = useContext(AuthContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
const handleSubmit = (e)=>{
    e.preventDefault()
    signInUser({email, password}, props)    
}

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={handleSubmit} className='d-flex flex-column gap-4 p-5' action="">
        <h2 className='text-start'>Login</h2>
        <div>
            <input className='w-100 border rounded-3 py-3 px-2' type="text" placeholder='email' 
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
        <button className='btn bg-primary text-white'>Login</button>

        <p>Don't have an account? <a href="#" onClick={()=>{
            props.onSwap()
            props.onHide()
        }}>Sign Up</a></p>
      </form>
     
    </Modal>
  )
}

export default LoginModal