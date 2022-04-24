import React,{useState,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header';
import Togglebutton from '../../components/Togglebutton/Togglebutton';
import axios from 'axios';
import "./Main.css"
import {HOST,API_KEY} from './KEYS.js'

function Main(){
    const [data, setdata] = useState(false);
    const [bgcolor, setBgcolor] = useState('white');
    const [textcol, settextcol] = useState('black');
    const [shadowcolor, setshadowcolor] = useState('2px 2px 5px black');
    const location = useLocation();
    const search = location.search.split('=')[1];
    // console.log(search);
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': HOST,
                'X-RapidAPI-Key': API_KEY
            }
        };
        const getPost = async()=>{
            const res = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?q=${search}&lat=0&lon=0&id=2172797&lang=null&units=imperial`,options);
            setdata(res.data);
            console.log(res);
            
        }
        getPost();
        // console.log(data)
    }, [search])
    const handletoggle = ()=>{
        if(bgcolor === 'white'){
            setBgcolor('black');
            settextcol('white');
            setshadowcolor('2px 2px 2px 5px white');
        }
        else{
            setBgcolor('white');
            settextcol('black');
            setshadowcolor('4px 4px 4px 5px black');
        }
        
    }
    
    return(
        <div style={{backgroundColor:`${bgcolor}`,height:620,transitionDuration:"2s"}}>
            {/* next Container */}
            <Header/>
            <Togglebutton handletoggle = {handletoggle}/>
            <div className = "container resultcontainer"  id="resulttab"style={{backgroundColor:`${bgcolor}`,boxShadow:`${shadowcolor}`}}>
                <div className = "row">
                        <div className = 'col-6 ' >
                             <h1 style={{color:`${textcol}`}}>Today's Weather!</h1>
                            <u  style={{color:`${textcol}`, fontSize: "25px",fontWeight: "bold",display:"inline"}}>Location:</u>&nbsp;&nbsp;&nbsp;&nbsp;
                            <h3  style={{color:`${textcol}`,display:"inline"}}>{data.name}</h3><br/><br/>
                            <u style={{color:`${textcol}`,fontSize: "25px",fontWeight: "bold",display:"inline"}}>Current Temperature:</u>&nbsp;&nbsp;&nbsp;&nbsp;<h3  style = {{color:`${textcol}`,display:"inline"}} >{data?`${data.main.temp}°C`:''}</h3><br/><br/>
                            <u style={{color:`${textcol}`,fontSize: "25px",fontWeight: "bold",display:"inline"}}>Humidity:</u>&nbsp;&nbsp;&nbsp;&nbsp;<h3  style = {{color:`${textcol}`,display:"inline"}}>{data?`${data.main.humidity}%`:''}</h3><br></br><br/>
                            <u style={{color:`${textcol}`,fontSize: "25px",fontWeight: "bold",display:"inline"}}>Description:</u>&nbsp;&nbsp;&nbsp;&nbsp;<h3 style = {{color:`${textcol}`,display:"inline"}} >{data?`"${data.weather[0]['description']}"`:''}</h3>

                            <form className = "check">
                            <Link to="/">
                                <button type="submit" className="btn btn-primary" id = "back"> 
                                 Back      
                                 </button>
                            </Link>
                            </form>
                            
                        </div>
                        <div className = "col-6" id="ig" style={{backgroundColor:"whitesmoke",borderRadius:"10px", display:"flex",justifyContent:"center",alignItems:"center"}}>
                            {data &&
                                <img className = "image" src={`http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`} alt = "This is the cloud image"/>
                            }                            
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Main;