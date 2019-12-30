import React, {Component} from 'react'
import TableRow from './TableRow'

export default class ProductTable extends Component {
    render(){
        let rows = [];
        let oldCate = "";
        let showdata = this.props.dummyData;
        if(this.props.stockedOnly) {
            showdata = showdata.filter((row)=>{
                return row.stocked
            })    
        }
        if(this.props.si) {
            showdata = showdata.filter((row)=>{
                let re = new RegExp(this.props.si, 'i')
                return row.name.search(re) !== -1
            })    
        }

        showdata.forEach(row => {        
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
