import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCity } from '../../context/CitiesContext';
import Card from './Card';


function ShowWeather() {

  const { cities, setCities, selected, setSelected } = useCity();
  const [dailyWeathList, setDailyWeathList] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
        axios(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=aab77b1efa83401cf064f96662d95239`)
          .then((res) => {
            if (res.data.name === 'Kağıthane') {
              setSelected('İstanbul');
            } else {
              setSelected(res.data.name);
            }
          })
          .catch((e) => console.log(e))
          .finally();
        console.log(latitude, ' -', longitude)
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  useEffect(() => {
    if (selected) {
      axios(`https://api.openweathermap.org/data/2.5/forecast?q=${selected}&appid=aab77b1efa83401cf064f96662d95239&units=metric&lang=tr&cnt=7`)
        .then((res) => {
          setDailyWeathList(res.data.list)
          console.log(res.data, '123')
        }
        )
        .catch((e) => console.log(e))
        .finally();
    }


  }, [selected]);

  console.log(dailyWeathList, 'asda')
  return (
    <div id='cardContainer'>
      {selected ? (
        <>
          <div id='cardHead'>{selected}</div>
          <div id='cardContain'>
            <Card dailyWeathList={dailyWeathList} />
          </div>
        </>
      ) : (
        <h1>Please Select a City !</h1>
      )
      }

    </div>

  )
}

export default ShowWeather