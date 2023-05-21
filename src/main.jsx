import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { MovieApp } from './MovieApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Main route for the application */}
    <MovieApp />
  </React.StrictMode>,
)
