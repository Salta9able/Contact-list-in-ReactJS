import React from 'react'
import {Button} from '@material-ui/core'
import Input from '@material-ui/core/Input';
import './style.css'



const Search = React.memo(({text, onTextChange}) => {
    return (
        <div className="search">
            <Input className="inputCustom" type="text" value={text} onChange={(e) => onTextChange(e)} />
            <Button variant="outlined" color="primary">Search</Button>
        </div>
    )
})

export default Search
