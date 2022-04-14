import React from 'react'
import './WidgetContainer.css';
import WidgetWrap from '../WidgetWrap/WidgetWrap.tsx';


const WidgetContainer = () => {
  return (
    <section className='widgetContainer'>
      <h1 className="title">Per product widgets</h1>
      <WidgetWrap />
    </section>
  )
}

export default WidgetContainer