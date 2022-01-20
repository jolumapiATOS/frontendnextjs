import React, { Component } from 'react';
import styles from '../styles/myOwn.module.css'

class Cardmessage extends Component {
    render() {
        const { message } = this.props
        console.log(message)
        return (
            <div className={styles.container}>
                <p> { this.props.message.message } </p>
                <p> { message.createdAt } </p>
            </div>
        );
    }
}

export default Cardmessage;
