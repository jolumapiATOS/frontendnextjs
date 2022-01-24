import React, { Component, useEffect } from 'react';
import PoolMessages from '../components/PoolMessages';
import StatusPool from '../components/StatusPool';



class Pool extends Component {
    state = {
        messages: null,
        loading: null,
        error: null
    }

    componentDidMount () {
        console.log("Activitad")
        fetch("https://node-server-for-upgrade.herokuapp.com/getLastAdvance", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Auth: window.localStorage.getItem("Auth")
            }})
        .then( res => res.json() )
        .then( data => {this.setState( { messages:  data.e[0][0].message } ), console.log(data) } );
    }

    render() {
        return (
            <div>
                { this.state.messages }
                <PoolMessages  messages={ this.state.messages } ></PoolMessages>
                <StatusPool></StatusPool>
            </div>
        );
    }
}

export default Pool;
