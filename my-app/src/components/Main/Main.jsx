import React from 'react';
import  Card  from '../Card';
import data from '../../data/data.json';
import './Main.css';

function Main(props) {
  const card = data.map(el => <Card src={el.img} title={el.description} id={el.id} key={el.id} />);
   return (
     <div className="fon">
    <div className="card-block">
      {card}
    </div>
    </div>
  );
}


export default Main;