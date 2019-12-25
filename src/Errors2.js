import React from 'react'

export default function delme(props) {
    console.log(props.errors)
    // return (
    //     <ul>
    //         {Object.keys(props.errors).map((key)=> props.errors[key] && <li>{props.errors[key]}</li>
    //         )}
    //     </ul>
    // )
    let errList = []
    Object.keys(props.errors).map(key => {
        if(props.errors[key]){
            errList.push(props.errors[key])
        }
    })
    return (
        <ul>
            {errList.map(err=> <li>{err}</li>)}
        </ul>
    )

}
