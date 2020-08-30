import React from 'react'
import { Button } from '@material-ui/core'

import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';

const Logic = React.memo(({showModal}) => {
    return (
        <div>
            <ListIcon />
            <AppsIcon />
            <Button onClick={() => showModal()} variant="outlined">Add</Button>
        </div>
    )
})

export default Logic
