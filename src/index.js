import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

function App() {
  return (
    <article>
      <h3>welcome</h3>
      <div id='list'></div>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);