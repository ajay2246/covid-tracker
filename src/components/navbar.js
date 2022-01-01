

function Navbar(props){
    
    return(
        <div style={{display:"flex",margin:"10px"}}>
          <div style={{flex:1,fontSize:"20px",fontWeight:"bold"}}>COVID-19 tracker</div>
          <div><input type="text" placeholder="select country" onChange={(e)=>{props.setCountry(e.target.value)}} /></div>
          <div style={{marginRight:"35px"}}><button onClick={()=>props.setSearch(props.country)}>search</button></div>
        </div>
    )
}

export default Navbar