
import {useState,useEffect} from'react';


function Sidebar(){
    const [data,setdata] = useState([]);
    useEffect(()=>{
        fetch("https://disease.sh/v3/covid-19/countries")
        .then((res)=>{
            return res.json();
        }).then((resp)=>{
            setdata(resp);
        })
    })
    return(
        <div>
             <div style={{width:"300px",height:"400px",backgroundColor:"white",overflow:"auto"}}>
            <div style={{fontSize:"18px",fontWeight:"bold",textAlign:"center"}}>Live Cases by Country</div><hr/>
            {
                data.map((item)=>{
                    return (
                        <div style={{display:"flex" }}>
                            <li style={{flex:1,listStyleType:"none",paddingLeft:"15px"}}>{item.country}</li>
                            <li style={{listStyleType:"none",color:"red",paddingRight:"15px"}}>{item.active}</li>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Sidebar;