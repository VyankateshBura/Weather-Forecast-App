import React,{useState} from 'react';
import Header from '../../components/Header/Header';
import Togglebutton from '../../components/Togglebutton/Togglebutton';

function Main(){
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
        <div style={{backgroundColor:`${bgcolor}`,height:620,transitionDuration:"2s"}}>
            {/* next Container */}
            <Header/>
            <Togglebutton handletoggle = {handletoggle}/>
            <div className = "container resultcontainer"  id="resulttab"style={{backgroundColor:`${bgcolor}`,boxShadow:`${shadowcolor}`}}>
                <div className = "row">
                        <div className = 'col-6 ' >
                            <h1 style={{color:`${textcol}`}}>Today's Weather!</h1>
                            {/* <u className = "content" style={{color:`${textcol}`}}>Location:</u>
                            <h3 className = "locat inlin" "style={{color:`${textcol}`}}></h3></br></br>
                            <u className = "content"style={{color:`${textcol}`}}>Current Temperature:</u><h3 className = "curr_temp inlin" "></h3></br></br>
                            <u className = "content"style={{color:`${textcol}`}}>Humidity:</u><h3 className = "hum inlin" "></h3></br></br>
                            <u className = "content"style={{color:`${textcol}`}}>Description:</u><h3 className = "ppt inlin" "></h3></br> */}
                    
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