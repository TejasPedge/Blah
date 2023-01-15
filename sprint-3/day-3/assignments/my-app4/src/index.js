import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Components/Context';



const Rootelem = document.getElementById('root')

const root = ReactDOM.createRoot(Rootelem);

root.render(

  <ContextProvider>
   <BrowserRouter>

       <App />

   </BrowserRouter>
  </ContextProvider>
 
);



