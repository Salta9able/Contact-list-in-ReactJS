import React from 'react'
import { Button } from '@material-ui/core'

function User({user, handleDelete, handleEdit, searchText}) {
    if (searchText !== '' && user.name.toLowerCase().indexOf( searchText.toLowerCase()) === -1) {
        return null
    }


    return (
        <li>
            <div className="userName">{user.name}</div>
            <div className="misc">
                <div>Age: {user.age}</div>
                <div>Email: {user.email}</div>
            </div>
            <div className="buttons">
                <Button variant="contained" color="primary" size="small" onClick={() => handleEdit(user.id)}>Edit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={() => handleDelete(user.id)}>Delete</Button>
            </div>
        </li>
    )
}

export default User
