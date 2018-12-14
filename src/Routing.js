import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import GenericTable from './GenericTable';

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
                        render={() => <GenericTable Test={"hi"} />}
                    />
                </Switch>
            </Router>
        );
    }
}

