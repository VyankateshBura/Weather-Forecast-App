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




const errorOccured = ()=>{
   
    email.innerHTML=`<p style = "color:red;font-weight:bold">Please check the spelling of the location and try again!</p>`
    inpemail.style.borderColor = "red";
    setTimeout(() => {
        email.innerHTML=`We'll never share your information with anyone else.`
        inpemail.style.borderColor = "black";
        inputtext.value ='';
    }, 5000);
}
const getcode = (dat)=>{
    let data = dat;
    if(data===200){
        return '2x';
    }
    else if(data===300){
        return '3x';
    }
    else if(data===500){
        return '3x';
    }
    else if(data===600){
        return '6x';
    }
    else if(data===700){
        return '7x';
    }
    else if(data===800){
        return '800';
    }
    else{
        return '80x';
    }
    
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