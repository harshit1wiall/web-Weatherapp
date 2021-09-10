const submit=document.querySelector('form');
const result=document.getElementById('result');
const nameVal=document.getElementById('name');
const temp=document.getElementById('temp');
const Icon=document.getElementById('icon');
const msg=document.getElementById('msg');
const back=document.querySelector('.base');
const tempmin=document.getElementById('temp-min');
const tempmax=document.getElementById('temp-max');
const DateUpdate=document.getElementById('dateUp');


function weathershow(searchText){

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=df0b1da0f1f46fd918b24a228822eb06`;

    fetch(url)
        .then((res) =>res.json())
        
        .then((data)=>{
            
                 nameVal.innerHTML=data.name;
                DateUpdate.innerHTML= new Date().toUTCString().slice(5, 16);
                temp.innerHTML=Math.round(data.main.temp-273)+'&degC';
                tempmax.innerHTML=Math.round(data.main.temp_max-273)+'&degC (max) /';
                tempmin.innerHTML=Math.round(data.main.temp_min-273)+'&degC (min)';
                Icon.innerHTML=data.weather[0].description;
                

                
                let weatherData=data.weather[0].description;
                switch(weatherData)
                {
                    case "broken clouds":
                        back.style.background="url(https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5JTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat";
                        back.style.backgroundSize="100% 100%";
                        break;
                     
                    case "mist":
                        back.style.background="url(https://images.unsplash.com/photo-1514467911470-2b2492c64477?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1pc3QlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat";
                  back.style.backgroundSize="100% 100%";
                        break;

                  case "overcast clouds":
                        back.style.background="url(https://images.unsplash.com/photo-1574579991264-a87099cc17b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG92ZXJjYXN0JTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat";
                  back.style.backgroundSize="100% 100%";
                  break;
                  case "rainy":
                      case "very heavy rain":
                          case "moderate rain":
                              case "light rain":
                        back.style.background="url(https://images.unsplash.com/photo-1501691223387-dd0500403074?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat";
                  back.style.backgroundSize="100% 100%";
                  break
                   case "clear sky":
                   case "few clouds":
                    back.style.background="url(https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat";
              back.style.backgroundSize="100% 100%";
              break
              case "scattered clouds":
                    back.style.background="url(https://images.unsplash.com/photo-1536543411350-41e735c940cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NhdHRlcmVkJTIwY2xvdWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat";
              back.style.backgroundSize="100% 100%";
              break;
              case "snow":
                    back.style.background="url(https://images.unsplash.com/photo-1525153770748-acfaa305783b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHNub3clMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat";
              back.style.backgroundSize="100% 100%";
              break;
              case "haze":
                back.style.background="url(https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF6ZSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat";
                back.style.backgroundSize="100% 100%";
                  break;
                  default:
                    back.style.background="url(https://images.unsplash.com/photo-1610337673044-720471f83677?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXJyb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat";
                    back.style.backgroundSize="100% 100%";
                }
        })
        .catch(() => {
            msg.innerText="Invaid City🙂"; 
        });
        
        nameVal.innerHTML="";
        DateUpdate.innerHTML="";
        temp.innerHTML="";
        tempmax.innerHTML="";
        tempmin.innerHTML="";
        Icon.innerHTML="";
        msg.innerText=""; 
    

}

submit.addEventListener('submit',(e)=>
{
    e.preventDefault();

    const searchText=submit.elements[0].value;
    weathershow(searchText);
    submit.elements[0].value="";
    
    
    
});

