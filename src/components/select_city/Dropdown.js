import React, { useState } from 'react'
import { useCity } from '../../context/CitiesContext';
import './style.css'

function Dropdown({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false);
  const {cities, setCities} = useCity();
  return (
    <div className='dropdown'>
      <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>{selected ? selected:'Choose City'}</div>
      {isActive && (
        <div className='dropdown-content'>
          {/* Dropdown içerisinden seçilen şehri tutuyoruz*/}
          {cities.map((city, key) => (
            <div key={key} className='dropdown-item' onClick={e => {
              setSelected(city)
              setIsActive(false)
            }}>
            {city}
          </div>
          ))}
          
          {/* <div className='dropdown-item'>
            Adana
          </div>
          <div className='dropdown-item'>
            Eskişehir
          </div> */}
        </div>
      )}

    </div>
  )
}

export default Dropdown