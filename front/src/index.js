import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}
// Customizing the alert
const AlertTemplate = ({ message }) => (
  <div className="alert alert-primary" role="alert">
    <CheckCircleIcon/>
    {message}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} template={AlertTemplate} {...options}> 
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);


