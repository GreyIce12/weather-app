const apiKey = "c8vrVjYSpAW8IOybo5I8ex5flmxeKtNI";

const getCityCondition = async (location) =>{

        const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${location}?apikey=${apiKey}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return (data[0]);
};


const getCity = async (city)=>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search;
    const query = `?apikey=${apiKey}&q=${city}`;
    
    const response = await fetch(base + query);  
    const data = await response.json();

    return (data[0]);

};

/*
getCity('MayPen')
.then((data) =>{
    return getCityCondition(data.Key); 
}).then((data) =>{
    console.log(data)
}).catch((err) =>{
    console.log(err);
});*/
