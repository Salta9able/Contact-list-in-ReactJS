import React from 'react'
import Input from '@material-ui/core/Input';




const Search = React.memo(({searchText, onTextChange}) => {
    return (
        <div className="search">
            <Input className="inputCustom" type="text" value={searchText} onChange={(e) => onTextChange(e)} placeholder="Search for name" />
        </div>
    )
})

export default Search
