import React, {Component} from 'react'
import dummyData from './dummy.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    state = {
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

    render(){
        return (        
            <div>
                <h1>My Table</h1>
                <SearchBar onSearchChanged={this.onSearchChanged} onStockedChanged={this.onStockedChanged} />
                <ProductTable dummyData={dummyData} si={this.state.si} stockedOnly={this.state.stockedOnly} />
            </div>
        )    
    }
}
