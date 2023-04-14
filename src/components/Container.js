import React from 'react'
import SelectCities from './select_city/SelectCities'
import ShowWeather from './show_weather/ShowWeather'
import './../components/show_weather/style.css'

function Container() {
  return (
    <>
    <div id='img'>
      {/* Şehir seçimi ve hava durumu gösterimi ni bu şekilde ana bir div içerisine aldık */}
        <SelectCities/>
        <ShowWeather/>
        </div>
    </>
  )
}

export default Container