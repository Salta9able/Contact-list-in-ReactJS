import React from 'react'
import { Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';


import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';

const Logic = React.memo(({showModal, handleRowLayout, handleGridLayout}) => {
    return (
        <div className="logic">
            <IconButton className="logicBtn" onClick={() => handleRowLayout()}><ListIcon /></IconButton>
            <IconButton className="logicBtn" onClick={() => handleGridLayout()}><AppsIcon /></IconButton>
           
            <Button onClick={() => showModal()} variant="outlined" color="warning" className="logicBtn">Add</Button>
        </div>
    )
})

export default Logic
