import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import getWeatherInfo from '../src/api.js';

export default function ({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      updateInfo(await getWeatherInfo(city));
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          size="small"
        />
        <br />
        <br />
        <Button variant="contained" type="submit" size="small">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such city found in our API</p>}
      </form>
    </div>
  );
}
