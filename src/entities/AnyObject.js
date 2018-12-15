import React, { Component } from 'react';
import { getById, get } from '../components/FetchCRUD';

export default class GenericObject extends Component {
    constructor(props) {
        super(props);
        this.state = { object: null}
    }

    //define endpoint here
    async componentDidMount() {
        const headerOfObj = await getById("anyObject2", this.props.id);
        const obj = await headerOfObj.json();
        this.setState({
            object: obj
        })
    }

    render() {
        if(this.state.object == null) {
            return (
                <div>no object found</div>
            )
        }
        return (
            <div>
                hello from {this.state.object.name}
            </div>
        );
    }





}