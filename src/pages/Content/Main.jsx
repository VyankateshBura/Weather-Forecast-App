import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header';
import Togglebutton from '../../components/Togglebutton/Togglebutton';
import axios from 'axios';
import {HOST,API_KEY} from './config.js'

function Main(){
    const [data, setdata] = useState([]);
    const [bgcolor, setBgcolor] = useState('white');
    const [textcol, settextcol] = useState('black');
    const [shadowcolor, setshadowcolor] = useState('2px 2px 5px black');
    const location = useLocation();
    const search = location.search.split('=')[1];

    console.log(search);
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
        console.log(data)
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
                            <h3  style={{color:`${textcol}`,display:"inline"}}>{data.name}</h3><br/>
                            <u style={{color:`${textcol}`,fontSize: "25px",fontWeight: "bold",display:"inline"}}>Current Temperature:</u>&nbsp;&nbsp;&nbsp;&nbsp;<h3  style = {{display:"inline"}} ></h3><br/>
                            <u style={{color:`${textcol}`,fontSize: "25px",fontWeight: "bold",display:"inline"}}>Humidity:</u>&nbsp;&nbsp;&nbsp;&nbsp;<h3  style = {{display:"inline"}}></h3><br></br>
                            <u style={{color:`${textcol}`,fontSize: "25px",fontWeight: "bold",display:"inline"}}>Description:</u>&nbsp;&nbsp;&nbsp;&nbsp;<h3 style = {{display:"inline"}} ></h3>
                
                            <form className = "check">
                                <button type="submit" className="btn btn-primary" id = "back">  Back  </button>
                            </form>
                            
                        </div>
                        {/* <div className = "col-6" id="ig">
                            
                        </div> */}
                </div>
            </div>
        </div>
    )
}
export default Main;