import React from "react";

const Filter=({value, filterContacts})=> (
     
        <label> Filter name
            <input type='text' value={value} onChange={filterContacts} />
        </label>
)


export default Filter