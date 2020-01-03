import React from 'react'

export default function TableRow(props) {
    let {row} = props;
    let name = row.stocked ? <span>{row.name}</span>: <span style={{color:'red'}}>{row.name}</span>                
    return (
        <tr><td>{name}</td><td>{row.price}</td></tr>            
    )
}
