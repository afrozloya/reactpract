import React from 'react'

export default function SearchBar(props) {
    const onChangeHAndler = (e) => {
        props.onStockedChanged(e.target.checked)
    }
    return (
        <div>
        <input onChange={(e)=> props.onSearchChanged(e.target.value)} name="si"/><br/>
        <label>
        <input onChange={onChangeHAndler} type="checkbox"/>
        Show only available!
        </label>
        </div>
    )
}
