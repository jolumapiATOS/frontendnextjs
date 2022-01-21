import React, { Component } from 'react';
import styles from '../styles/Home.module.css'

class Cardmessage extends Component {
    handleDate (message) {
        const date = new Date( message.createdAt );
        const dateParse = Date.parse( date );
        const dateNow = Date.now();
        const miliseconds = dateNow - dateParse;
        const days = miliseconds / 86400000;
        let userInfo;
        if(days < 1) {
            userInfo = 'less than a day ago'
        } else {
            let daysFormat = Math.floor(days);
            userInfo = daysFormat + ' days ago';
        }
        return userInfo;
    }


    render() {
        const { message } = this.props
        const info = this.handleDate(message)
        return (
            <div className={styles.container}>
                <p> { this.props.message.message } </p>
                <p className={ styles.messageDate }> { info } </p>
            </div>
        );
    }
}

export default Cardmessage;
