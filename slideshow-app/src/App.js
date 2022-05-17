import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store';
import Carousel from './components/Carousel/Carousel';
import Menu from './components/Menu/menu';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Menu />
        <Carousel />
      </Container>
    </Provider>
  )
  
}

export default App;

