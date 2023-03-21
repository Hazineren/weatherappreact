import React from 'react'
import SelectCities from './select_city/SelectCities'
import ShowWeather from './show_weather/ShowWeather'
import './../components/show_weather/style.css'

function Container() {
  return (
    <>
    <div id='img'>
        <SelectCities/>
        <ShowWeather/>
        </div>
    </>
  )
}

export default Container