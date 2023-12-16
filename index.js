import express from "express";
import axios from"axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const port = process.env.PORT;
const API_KEY = process.env.APIKEY;
let imgUrl;

app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/", async (req, res) => {
    try{
        const city = req.body.city;
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

        setImgURL(result.data.weather[0].main);
        const response = result.data;
        
        res.render("index.ejs",{ 
          content : response,
          img : imgUrl,
          temperature : Math.round(response.main.temp - 273.15),
          description : response.weather[0].description,
          humidityValue : response.main.humidity,
          windSpeed : response.wind.speed,
        });
    }
    catch(error){
        res.render("index.ejs", {
            error : "Sorry, location not found.", 
        });
    }
});

app.listen(port, () => { });

function setImgURL(value) {
  const weatherImages = {
      'Clouds': 'images/cloud.png',
      'Thunderstorm': 'images/cloud.png',
      'Drizzle': 'images/cloud.png',
      'Rain': 'images/rain.png',
      'Clear': 'images/Clear.png',
      'Mist': 'images/mist.png',
      'Smoke': 'images/mist.png',
      'Haze': 'images/mist.png',
      'Dust': 'images/mist.png',
      'Fog': 'images/mist.png',
      'Sand': 'images/mist.png',
      'Ash': 'images/mist.png',
      'Squall': 'images/mist.png',
      'Tornado': 'images/mist.png',
      'Snow': 'images/snow.png',
  };

  imgUrl = weatherImages[value] || 'images/404.png';
}
