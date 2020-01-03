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
        this.updateData()
        // let newState = {...this.state, ...newProperty};
        // this.updateData(newState);
    }
    onSearchChanged = (si) => {
        let newProperty = {
            si: si
        };
        this.setState(newProperty)
        this.updateData()
        // let newState = {...this.state, ...newProperty};
        // this.updateData(newState);
    }

    updateData = () => {
        this.setState((prevState)=>{
            // let prevState = this.state;
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
            return {
                showData: showData2
            }
        })
    }

    render(){
        return (        
            <div>
                <h1>My Table</h1>
                <SearchBar onSearchChanged={this.onSearchChanged} onStockedChanged={this.onStockedChanged} />
                <ProductTable showdata={this.state.showData} />
            </div>
        )    
    }
}
