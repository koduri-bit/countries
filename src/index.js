import ReactDOM from 'react-dom';


import App from './App';
import {DarkModeContextProvider} from './store/darkmode-context'

ReactDOM.render(


              <DarkModeContextProvider>
                 <App />
              </DarkModeContextProvider>


             ,
  document.getElementById('root')
);
