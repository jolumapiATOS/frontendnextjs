const StatusPool = ({ counting }) => {
    console.log( counting )
    return ( 
        <div className="p-4 container-status">
            <h1 className="text-light">Uploaded: { counting } </h1>
        </div>
     );
}
 
export default StatusPool;