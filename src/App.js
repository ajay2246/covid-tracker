
import {useState,useEffect} from 'react'
import Desc from './components/desc';
import Details from './components/details';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  const [country,setCountry] = useState("");
  const [data,setData] = useState([])
  const [search,setSearch] = useState("india");

  useEffect(()=>{
    fetch(`https://disease.sh/v3/covid-19/countries/${search}`)
    .then((res)=>{
      return res.json();
    }).then((rest)=>{
      setData(rest)
      console.log(rest)
    })
  },[search])
  return (
    <div style={{display:"flex"}}>
      <div style={{marginLeft:"15px",width:"70%"}}>
        <Navbar country={country} setCountry={setCountry}  setSearch={setSearch}/>
        <Desc name={data.country} cont={data.continent}/>
        <div style={{display:"flex",flexDirection:"row" ,justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
          <Details name="Active Cases" cases={data.active}/>
          <Details name="Recovered" cases={data.recovered} />
          <Details name="Deaths" cases={data.deaths}/>
          <Details name="Total Population" cases={data.population}/>
          <Details name="Tests" cases={data.tests}/>
        </div>
      </div>
      <Sidebar cases={data.cases}/>
    </div>
  );
}

export default App;
