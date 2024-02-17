import React from 'react'
import ReactDOM from 'react-dom/client'
import './CalendarMain.scss'
import VerticalCalendar from './VerticalCalendar/VerticalCalendar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <section className={'w-8/12'}>

    <VerticalCalendar />
      </section>
  </React.StrictMode>,
)
