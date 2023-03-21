import React from 'react'
import { useCity } from '../../context/CitiesContext';
import Dropdown from './Dropdown';
import './style.css'

function SelectCities() {
    const {cities, setCities, selected, setSelected} = useCity();
  
  return (
    <div className='container'>
        <Dropdown selected={selected} setSelected={setSelected}/>
    </div>
  )
}

export default SelectCities