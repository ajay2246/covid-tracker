

function Desc(props){
    return(
        <div style={{textAlign:"center",padding:"20px"}}>
            <span style={{fontSize:"25px",color:"red",paddingRight:"10px",fontWeight:"bold"}}>{props.name}</span>
            <span style={{fontSize:"15px",color:"grey",fontWeight:"bold"}}>{props.cont}</span>
        </div>
    )
}

export default Desc;