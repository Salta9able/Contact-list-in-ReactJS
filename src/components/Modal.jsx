import React from 'react'
import Input from '@material-ui/core/Input'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { v4 as uuidv4 } from 'uuid'

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
            <IconButton className="close_btn" onClick={() => closeModal()}>
                <CloseIcon />
            </IconButton>
            
            <form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Name" value={userInfo.name} onChange={handleChange} required/>
                <Input type="text" name="age" placeholder="Age" value={userInfo.age} onChange={handleChange} required/>
                <Input type="text" name="email" placeholder="example@gmail.com"  value={userInfo.email} onChange={handleChange} required />
                <Button className="submitBtn" type="submit" >Submit</Button>
            </form>
            
        </div>
    )
})


export default Modal


