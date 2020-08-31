import React from 'react'
import { Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';


import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';

const Logic = React.memo(({showModal}) => {
    return (
        <div className="logic">
            <IconButton className="logicBtn"><ListIcon /></IconButton>
            <IconButton className="logicBtn"><AppsIcon /></IconButton>
           
            <Button onClick={() => showModal()} variant="outlined" color="warning" className="logicBtn">Add</Button>
        </div>
    )
})

export default Logic
