const PoolMessages = (props) => {
    console.log( props )
    return ( 
        <div>
           <p> { props.messages } </p>
        </div>
     );
}
 
export default PoolMessages;