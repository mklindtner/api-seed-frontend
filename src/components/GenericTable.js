import React, { Component } from 'react';
//import {get} from './FetchCRUD';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as ReactBootstrap from 'react-bootstrap';
import { withRouter } from "react-router";
import { getAnyObjectAll } from './implementedFetch/AnyObjectFetch';

export class GenericTable extends Component {
    constructor(props) {
        super(props);
        this.state = { anyObject: [], currentId: -1 }
    }

    async componentDidMount() {
        const valueHeader = await getAnyObjectAll(); //impFetch
        const value = await valueHeader.json();
        this.setState({
            anyObject: value
        });
    }

    goToItem = (id) => {
        this.props.history.push('/singleItem/' + id);
    }

    updateItem = (id) => {
        this.props.history.push('/edit/' + id);
    }

    tableHeadersAndCell = () => {
        let result = Object.keys(this.state.anyObject[0]);
        let columns = result.map((colName, key) => {
            if (colName == "id") {
                return (
                    <TableHeaderColumn key={key} isKey dataField={colName}>Product {colName}</TableHeaderColumn>
                );
            }
            return (
                <TableHeaderColumn key={key} dataField={colName}>{colName}</TableHeaderColumn>
            )
        });
        return columns;
    }


    buttonFormatter = (cell, row) => {
        return (<>
            <ReactBootstrap.Button bsStyle="primary" onClick={() => this.goToItem(row.id)}>details</ReactBootstrap.Button>
            <ReactBootstrap.Button onClick={() => this.updateItem(row.id)}>edit</ReactBootstrap.Button>
        </>
        );
    }
    
    render() {
        const headers = this.tableHeadersAndCell
        if (this.state.anyObject[0] == null)
            return "ok";
        else {
            return (
                <BootstrapTable data={this.state.anyObject}>
                    {this.tableHeadersAndCell()}
                    <TableHeaderColumn dataField='edit' dataFormat={this.buttonFormatter}>Button</TableHeaderColumn>
                </BootstrapTable>
            );
        }

    }
}

/* avoiding child warning; hardcode values instead of tablHeadersAndCell
  <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
  <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>

*/

export default withRouter(GenericTable);