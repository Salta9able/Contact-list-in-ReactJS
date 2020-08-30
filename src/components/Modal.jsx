import React from 'react'
import Input from '@material-ui/core/Input'
import CloseIcon from '@material-ui/icons/Close';
import { v4 as uuidv4 } from 'uuid'

import './style.css'

const Modal = React.forwardRef(({setUsersList, usersList, userInfo, setUserInfo, closeModal}, ref) => {
    const handleChange = (e) => {
        const value = e.target.value;
        
        setUserInfo({
            ...userInfo,
            [e.target.name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setUsersList([...usersList, userInfo])
        setUserInfo({id: uuidv4(), name: '', age: '', email: ''})
    }

    

    return (
        <div ref={ref} className="modal">
            <button className="close_btn" onClick={() => closeModal()}>
                <CloseIcon />
            </button>
            <form>
                <Input type="text" name="name" placeholder="Name" value={userInfo.name} onChange={handleChange}/>
                <Input type="text" name="age" placeholder="Age" value={userInfo.age} onChange={handleChange}/>
                <Input type="text" name="email" placeholder="example@gmail.com"  value={userInfo.email} onChange={handleChange} />
                <input type="submit" onClick={handleSubmit} />
            </form>
            
        </div>
    )
})


export default Modal


