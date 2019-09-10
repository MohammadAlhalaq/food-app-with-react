import React from 'react'

const TitleFilter = ({ handleTitle }) => {
    return (
        <div>
            <input placeholder="enter the title" type="text" onChange={handleTitle} />
        </div>
    )
}

export default TitleFilter;
