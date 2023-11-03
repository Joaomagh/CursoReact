import { Fragment } from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import Images from './components/images';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragmento from './components/Fragmento';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Hello React!</h2>
      <FirstComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={8} y={10} />
      <Fragmento />
      <Container>
        <h1>Esse é o filho do container!</h1>
      </Container>
    </div>
  );
}

export default App;
