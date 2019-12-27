import MyConst, {PI} from './myconst'
import React from 'react'

export default function delme() {
    console.log(MyConst)
    console.log(MyConst.PI)
    console.log(PI)
    return (
        <div>
            <h1>Del ME</h1>
        </div>
    )
}
