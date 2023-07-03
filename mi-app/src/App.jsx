/*import React from 'react';*/
import './App.css';
import Container from './components/Container';
import Button from './components/Button';

function App() {
  const data = [
    {name: 'Foto de Gatos', url:''},
    {name: 'Menu Cafe', url:''}
  ]
  return (
    <div>
      <Container>
        {
          data.map( (element, key) => {
            return <Button key={key} text={element.name} url={element.url}/>
          })
        }
      </Container>
    </div>
  );
}

export default App;
