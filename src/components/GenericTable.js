import React, { Component } from 'react';
import {get} from './FetchCRUD';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as ReactBootstrap from 'react-bootstrap';
import { withRouter } from "react-router";

export class GenericTable extends Component {
    constructor(props) {
        super(props);
        this.state = { anyObject: [], currentId: -1 }
    }

    async componentDidMount() {
        const valueHeader = await get("anyObject2");
        const value = await valueHeader.json();
        this.setState({
            anyObject: value
        });
    }

    goToItem = (id) => {
        this.props.history.push('/singleItem/' + id);
    }

    updateItem = (id) => {
        this.props.history.push('/edit/'+ id);
    }


    buttonFormatter = (cell, row) => {
        return (<>
        <ReactBootstrap.Button bsStyle="primary" onClick={() => this.goToItem(row.id)}>details</ReactBootstrap.Button>
        <ReactBootstrap.Button onClick={() => this.updateItem(row.id)}>edit</ReactBootstrap.Button> 
        </>
        );
    }
    //<ReactBootstrap.Button bsStyle="danger" onClick={() => this.goToItem(row.id)}>delete</ReactBootstrap.Button> 
    //add datafield (props) of object here   
    render() {
        return (
            <BootstrapTable data={this.state.anyObject}>
                <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='edit' dataFormat={this.buttonFormatter}>Button</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default withRouter(GenericTable);