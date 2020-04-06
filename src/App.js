import React from 'react';
import { Provider } from 'react-redux';
//import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
            <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
