import React from 'react';
import axios from 'axios';

export default class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            friend: ''
        }
    }

    componentDidMount() {
        axios
            .get()
            .then()
    }

    render () {
        const { friend } = this.state;
    }

    return (

    )
}