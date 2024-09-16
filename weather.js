const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";

function getWheather(){
    const city=document.getElementById('cityInput').value;
    const weatherDetails=document.getElementById('WheatherDetails')
    if(city===''){
        weatherDetails.innerHTML="Please enter a city name";
        return;
    }
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
        fetch(url)
        .then((response)=>response.json())
          .then((data)=>{
            if(data.cod==='404'){
                weatherDetails.innerHTML="City not found";
            }
            else{
                console.log(data)
                weatherDetails.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
                <p>Temparature:${data.main.temp}</p>
                <p>Temparature-min:${data.main.temp_min}</p>`

            }
        })

        .catch(error=>{
            weatherDetails.innerHTML="<p> error fetching data </p>"
        })
}