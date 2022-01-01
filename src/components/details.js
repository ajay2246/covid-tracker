
function Details(props){
    var countryname = props.country;
    return(
        <div>
            <div style={{fontSize:"20px",fontWeight:"bold",color:"red",textAlign:"center"}} >{countryname}</div>
            <div style={{display:"flex",flexDirection:"column",height:"100px",width:"300px",padding:"15px",backgroundColor:"white",margin:"10px"}}>
              <div style={{color:"grey"}}>{props.name}</div>
              <div style={{color:"red",fontSize:"20px"}}>{props.cases}</div>
              <div style={{fontSize:"10px",color:"grey"}}>11.3m Total</div>
            </div>
        </div>
    )
}

export default Details