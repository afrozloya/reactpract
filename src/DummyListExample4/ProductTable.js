import React, {Component} from 'react'
import TableRow from './TableRow'

export default class ProductTable extends Component {
    render(){
        let rows = [];
        let oldCate = "";
        this.props.showdata.forEach(row => {        
            if(oldCate !== row.category){
                rows.push(<tr style={{fontWeight: "bold"}} key={row.category}><td colSpan="2">{row.category}</td></tr>)
                oldCate= row.category;
            }
            rows.push(<TableRow key={row.name} row={row}/>)
        })
        return (
            <div>
               <table>
                   <thead>
                       <tr>
                       <th>Name</th>
                       <th>Price</th>
                       </tr>
                   </thead>
                    <tbody>
                    {rows}
                </tbody>
                </table>            
            </div>
        )
    }
}
