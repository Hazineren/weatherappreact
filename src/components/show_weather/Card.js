import React from 'react'
import './style.css'

function Card({dailyWeathList}) {
  console.log(dailyWeathList,'222')
  return (
    <div className='cardMain'>
  {dailyWeathList &&
    dailyWeathList.map((item,i) => {
      const date = new Date(item.dt_txt);
      date.setDate(date.getDate() + i);
      // console.log(date,'Günnnn')
      const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];

      return (
        // Her gün için gösterilecek bir card tasarımı oluşturuldu
        <div className='cardItem' key={item.dt}>
          <p>{dayOfWeek}</p>
          <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
          <p>{item.main.temp}°C</p>
          <p>{item.weather[0].description}</p>
        </div>
      );
    })}
</div>
  )
}

export default Card