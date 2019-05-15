import React from 'react';


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