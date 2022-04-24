import React from 'react';
import ReactDOM from 'react-dom/client';
//components
import AddAppointment from './components/AddAppointment'
import Search from './components/Search';
import AddInfo from './components/AddInfo'
//source
import { BsFillCalendarCheckFill } from "react-icons/bs";
import './index.css'

function App() {
  return (
    <article>
      <h3>
        <BsFillCalendarCheckFill style={{paddingRight: "10px"}} />
        예약 시스템
      </h3>
      <AddAppointment />
      <Search />
      <div id='list'>
        <ul>
            <AddInfo />
        </ul>
      </div>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);