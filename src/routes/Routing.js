import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import GenericTable from '../components/GenericTable';
import ModalEditItem from '../components/ModalEditItem';

export default class Routing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        component={this.props.home}
                    />
                    <Route
                        exact={true}
                        path="/table"
                        render={() => <GenericTable />}
                    />
                    <Route
                        exact={true}
                        path="/singleItem/:id"
                        component={this.props.singleItem}
                    />
                    <Route
                        exact={true}
                        path="/edit/:id"
                        component={this.props.editItem}                        
                    />
                </Switch>
            </Router>
        );
    }
}



