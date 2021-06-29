import React from 'react';
import Card from '../Card';
import { Container } from 'react-bootstrap';
import './Main.css';

function Main(props) {
  const card = () => {
    return props.data.map(el => <Card data={el} key={el.description} />);
  };
   return (
    <div className="fon">
      <Container fluid>
        <main className="card-block">
          {card()}
        </main>
      </Container> 
    </div>
  ); 
}

export default Main;
