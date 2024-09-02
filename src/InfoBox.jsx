import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const COLD_URL = "images/snow.png";
    const Hot_URL =   "images/mist.png";
    const RAIN_URL =  "images/rain.png";
    return (
        <div>
            <h3>--------Weather Info--------</h3>
            <div>
            <Card className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80? RAIN_URL: info.temp < 15? COLD_URL: Hot_URL}
      />
      <CardContent className='cardContent'  style={{backgroundColor:"#15edc9"}}>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} &nbsp;&nbsp;
         {info.humidity > 80? <ThunderstormIcon />: info.temp < 15? <SevereColdIcon/>: <WbSunnyIcon/> }
        </Typography>
        <Typography variant="body2"  component={"span"}>
            <div className='temp'>
                {info.temp}&deg;C
            </div>
            <div className="weather">
            {info.weather}</div>
            <div>Humidity = {info.humidity}</div>
            <div>Feels_like = {info.feels_like}&deg;C</div>
            <div>Min-Temprature = {info.temp_min}&deg;C</div>
            <div>Max-Temprature = {info.temp_max}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
            </div>
        </div>
    );
}