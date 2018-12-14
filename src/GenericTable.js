import React, { Component } from 'react';
import restCall from './entities/anyObject';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class GenericTable extends Component {
    constructor(props) {
        super(props)
        this.state = { anyObject: [] }
    }


    async componentDidMount() {
        const valueHeader = await restCall();
        const value = await valueHeader.json();
        this.setState({
            anyObject: value
        });        
    }
    

    render() {
        console.log(this.state.anyObject);
        return (
            <BootstrapTable data={this.state.anyObject} version='4'>
                <TableHeaderColumn width='150'isKey dataField='id'>Product ID</TableHeaderColumn>
                <TableHeaderColumn width='150' dataField='name'>Product Name</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];


/*
 arrayItem.map( (singleItem) => {
            console.log("val is: " + singleItem);
            return <th scope="col">{sing}</th>
        })

*/