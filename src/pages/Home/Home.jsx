import React,{useState} from 'react';
import Header from '../../components/Header/Header';
import Togglebutton from '../../components/Togglebutton/Togglebutton';
import "./Home.css";
function Home(){
    const [bgcolor, setBgcolor] = useState('white');
    const [textcol, settextcol] = useState('black');
    const [shadowcolor, setshadowcolor] = useState('2px 2px 5px black');

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
        <div style = {{backgroundColor:`${bgcolor}`,height:620,transitionDuration:"2s"}} >
            <Header/>
            <Togglebutton handletoggle={handletoggle}/>
            {/* Search Tab */}
            <div className="container" id = "searchtab">
                    <div className ="col box" style={{boxShadow:`${shadowcolor}`}} id = "boxes">
                        <div className = 'row main'>
                            <h2 id = 'hd'style={{color:`${textcol}`}}>Hello and welcome to Weather Forecast!</h2> 
                
                        </div>
                        <div className ="row search" >
                            <form className = "check">
                                <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label" style={{color:`${textcol}`}}>Enter the city name</label>
                                <input type="text" className="form-control inp" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text"style={{color:`${textcol}`}}>We'll never share your information with anyone else.</div>
                                </div>
                                <button type="submit" className="btn btn-primary"style={{color:`${textcol}`}}>Check Weather</button>
                            </form>
                    </div> 
                    
                    </div>
            </div>
        </div>
    )
}
export default Home;