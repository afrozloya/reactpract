import React, {Component} from 'react'
import dummyData from './dummy.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    state = {
        showData: dummyData,
        stockedOnly: false,
        si: ''
    }
    onStockedChanged = (stockedOnly) => {
        let newProperty = {
            stockedOnly: stockedOnly
        }
        this.setState(newProperty)
    }
    onSearchChanged = (si) => {
        let newProperty = {
            si: si
        };
        this.setState(newProperty)
    }


    updateData = () => {
        let prevState = this.state;
        let showData2 = dummyData;
        if(prevState.stockedOnly) {
            showData2 = dummyData.filter((row)=>{
                return row.stocked
            })    
        }
        if(prevState.si) {
            showData2 = showData2.filter((row)=>{
                let re = new RegExp(prevState.si, 'i')
                return row.name.search(re) !== -1
            })    
        }
        return showData;
        // this.setState({
        //     showData: showData2
        // })
    }

    render(){
        // console.log(dummyData)
        let showdata = this.updateData();
        return (        
            <div>
                <h1>My Table</h1>
                <SearchBar onSearchChanged={this.onSearchChanged} onStockedChanged={this.onStockedChanged} />
                <ProductTable showdata={showdata} />
            </div>
        )    
    }
}
