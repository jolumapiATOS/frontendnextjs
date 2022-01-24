const StatusPool = ({ counting }) => {
    console.log( counting )
    return ( 
        <div className="p-4 container-status">
            <h2 className="text-light">Uploaded: { counting } </h2>
        </div>
     );
}
 
export default StatusPool;