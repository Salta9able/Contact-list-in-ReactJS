import React from 'react'
import { Button } from '@material-ui/core'

function User({user, handleDelete, handleEdit}) {
    return (
        <li className="userItem">
            <div className="userName">{user.name}</div>
            <div className="misc">
                <div>{user.age}</div>
                <div>{user.email}</div>
            </div>
            <div className="buttons">
                <Button variant="contained" color="primary" size="small" onClick={() => handleEdit(user.id)}>Edit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={() => handleDelete(user.id)}>Delete</Button>
            </div>
        </li>
    )
}

export default User
