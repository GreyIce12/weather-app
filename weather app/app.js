const form =  document.querySelector('form');
const temp  = document.querySelector('.one');
const currentCity  = document.querySelector('.details h5');
const weather  = document.querySelector('.details div');
const weatherIcon = document.querySelector('.icon img');
const card = document.querySelector('.card');
const time  = document.querySelector('.time');


const displayWeather = (data) =>{


    if(card.classList.contains("d-none")) {

        card.classList.remove("d-none");
        
    };

    temp.textContent = data.condition.Temperature.Metric.Value;
    weather.textContent = data.condition.WeatherText;
    currentCity.textContent = data.cityLocation.EnglishName;

     const dayTime = (data.condition.IsDayTime)? 'https://i1.wp.com/metro.co.uk/wp-content/uploads/2018/06/gettyimages-900256522.jpg?quality=90&strip=all&w=1200&h=630&crop=1&zoom=1&ssl=1': 'https://image.freepik.com/free-vector/night-time-nature-landscape-with-house-full-moon_16058-81.jpg';

    time.setAttribute("src", dayTime);

    const icon  = `icons/${data.condition.WeatherIcon}.svg`;

    weatherIcon.setAttribute("src", icon);    


}; 

const updateweather = async(city) =>{

    const cityLocation = await getCity(city);
    const condition = await getCityCondition(cityLocation.Key);

    return{cityLocation, condition};

};

form.addEventListener('submit', (e)=>{


    e.preventDefault();

    const city  = form.city.value.trim();
    
    updateweather(city)
    .then((data) =>{
        displayWeather(data);
        console.log(data)
        form.reset();

    }).catch((err) =>{
        console.log(err)
    });    

    
});
