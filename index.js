const checksearch = document.querySelector('.check');
var inputtext = document.querySelector('.inp');
const head = document.getElementById('hd');
const email = document.getElementById('emailHelp')
const inpemail = document.getElementById('exampleInputEmail1');
const searchtab = document.getElementById('searchtab');
const resulttab = document.getElementById('resulttab');
const back = document.getElementById('back');
const ppt = document.querySelector('.ppt')
const Location = document.querySelector('.locat')
const curr_temp = document.querySelector('.curr_temp')
const humidity = document.querySelector('.hum')
const image = document.getElementById('ig');
const toggle = document.getElementById('toggle');
const bg = document.getElementById('bg');
const formlabel = document.querySelector('.form-label');
const formtext = document.querySelector('.form-text');
const box = document.getElementById('boxes');

var togglenum = 0;
toggle.addEventListener('click',()=>{
    console.log("toggled");
    if(togglenum%2==0){
        bg.style.backgroundImage = 'url(./nightphoto.jpg)';
        head.style.color="white";
        formlabel.style.color="white";
        formtext.style.color="white";
        box.style.boxShadow = "0 2px 8px 0 white";
        togglenum++;
        console.log('night');
    }
    else{
        bg.style.backgroundImage = 'url(./bg.png)';
        head.style.color="black";
        formlabel.style.color="black";
        formtext.style.color="black";
        box.style.boxShadow = "0 2px 8px 0 black";
        togglenum++;
        console.log('day');
    }    
})

const errorOccured = ()=>{
   
    email.innerHTML=`<p style = "color:red;font-weight:bold">Please check the spelling of the location and try again!</p>`
    inpemail.style.borderColor = "red";
    setTimeout(() => {
        email.innerHTML=`We'll never share your information with anyone else.`
        inpemail.style.borderColor = "black";
        inputtext.value ='';
    }, 5000);
}

checksearch.addEventListener("submit",async(e)=>{
    e.preventDefault();
    try {
        const search = inputtext.value;
        console.log(search);
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': HOST,
                    'X-RapidAPI-Key': API_KEY
                }
            };
            
            const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${search}&lat=0&lon=0&id=2172797&lang=null&units=imperial`, options)
               
            const data = await response.json();
            console.log(data);
            if(data['name']===undefined||data['name']==='Globe'){
                errorOccured();
            }
            else{
                searchtab.style.display = "none";
                resulttab.style.display = "block";
                Location.innerHTML+=`   ${data['name']}`;
                curr_temp.innerHTML+=`   ${data.main['temp']}°C`;
                humidity.innerHTML+=`   ${data.main['humidity']}%`;
                ppt.innerHTML+=`   "${data.weather[0]['description']}"`;


                image.innerHTML=`<img class = "image" src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt = "This is the cloud image">`
                back.addEventListener("submit",(e)=>{
                    e.preventDefault();
                    resulttab.style.display = "none";
                    searchtab.style.display = "block";
                })                
            }
    } catch (error) {
        console.error(error);
    }
    
})