

function Navbar(props){
    
    return(
        <div style={{display:"flex",margin:"10px"}}>
          <div style={{flex:1,fontSize:"20px",fontWeight:"bold"}}>COVID-19 Tracker</div>
          <div><input type="text" placeholder="select country" onChange={(e)=>{props.setCountry(e.target.value)}} style={{width:"200px",borderRadius:"15px",fontSize:"20px",textAlign:"center"}} /></div>
          <div style={{marginRight:"35px"}}><button onClick={()=>props.setSearch(props.country)} style={{width:"80px",borderRadius:"15px",backgroundColor:"blue",color:"white",fontSize:"20px"}}>search</button></div>
        </div>
    )
}

export default Navbar