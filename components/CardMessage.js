import React, { Component } from 'react';
import styles from '../styles/Home.module.css'

class Cardmessage extends Component {
    handleDate(m) {
            let date = new Date(m[1]);
            let parsed = Date.parse(date);
            let dateNow = Date.now()
            let difference = dateNow - parsed
            let days = difference / 86400000;
            return Math.floor(days);
    }
    render() {
        let element
        if( this.props.messages ) {
            element = this.props.messages.map((m, i) => {
                let date = this.handleDate(m)
                return (
                    <div className={styles.container}>
                        <p> { m[0] } </p>
                        { date > 1 ? <p className={ styles.messageDate }> { date } days ago </p> : <p className={ styles.messageDate }> a day ago </p> }
                        { (i === 0) ? <p className={ styles.counterRecent }> most recent </p> : <p className={ styles.counter }> { i + 1 } </p>}
                    </div>
                )
            })
        }
        
        return (
            <section>
                { element }
            </section>
        );
    }
}

export default Cardmessage;
