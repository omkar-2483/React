import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  let INIT_IMG =
    "https://media.istockphoto.com/id/1231763508/photo/beijing-liangmaqiao-skyline.jpg?s=1024x1024&w=is&k=20&c=Wimuu-AhCGPoI5sVN6WMuJFZ9YlOIOkE2jcWJ-Dvtsg=";
  let HOT_URL =
    "https://media.istockphoto.com/id/612023744/photo/blue-and-orange-sunset-sky.jpg?s=2048x2048&w=is&k=20&c=iOsgxtX4inmdrNHV-U7ZiHai-a5MZA0uNLifdCG_L0k=";
  let COLD_URL =
    "https://images.unsplash.com/photo-1653138956520-c700df007734?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1696671648700-07cf7f5a0d87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 150 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                ? <WbSunnyIcon />
                : <AcUnitIcon />}
            </Typography>
            
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp} &deg;C </p>
              <span>Min temp = {info.minTemp}</span>&nbsp;&nbsp;&nbsp;
              <span>Max temp = {info.maxTemp}</span>
              <p>Humidity = {info.humidity} </p>
              <p>
                <i>
                  the Weather can be described as {info.weather} and feels like{" "}
                  {info.feelsLike} &deg;C
                </i>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
