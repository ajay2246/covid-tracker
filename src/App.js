
import {useState,useEffect} from 'react'
import Desc from './components/desc';
import Details from './components/details';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Map from './components/map';

function App() {
  const [country,setCountry] = useState("");
  const [data,setData] = useState([])
  const [search,setSearch] = useState("india");
  const [mapCenter,setMapCenter] = useState({lat : 34.88746,lng:-40.4796})
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(()=>{
    fetch(`https://disease.sh/v3/covid-19/countries/${search}`)
    .then((res)=>{
      return res.json();
    }).then((rest)=>{
      setData(rest)
      setMapCenter([rest.countryInfo.lat, rest.countryInfo.long])
      setMapZoom(4)
      console.log(rest)
    })
  },[search])
  return (
    <div style={{display:"flex"}}>
      <div style={{marginLeft:"15px",width:"70%"}}>
        <Navbar country={country} setCountry={setCountry}  setSearch={setSearch}/>
        <Desc name={data.country} cont={data.continent}/>
      <div style={{display:"flex",flexDirection:"row" ,justifyContent:"space-evenly",alignItems:"center"}}>
        <Details name="Active Cases" cases={data.active}/>
        <Details name="Recovered" cases={data.recovered} />
        <Details name="Deaths" cases={data.deaths}/>
      </div>
      <Map center = {mapCenter} zoom ={mapZoom}/>
      </div>
      <Sidebar cases={data.cases}/>
    </div>
  );
}

export default App;
