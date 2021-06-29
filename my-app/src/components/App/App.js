import React, { useEffect, useState } from 'react';
import './App.css';
import  Articles  from '../Articles';
import  Main  from '../Main';
import  Header  from '../Header';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import { validateCreatingCard } from '../../firebase/validation';

function App() {
    const [fireCollection, setFireCollection] = useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
          const db = firebase.firestore();
          const data = await db.collection('data').get();
          setFireCollection(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        };
        fetchData();
      }, []);
    
//   const getData = async () => {
//     const db = firebase.firestore();
//     const collections = await db.collection('reactdeved').get();
//     const beforeValidate = collections.docs.map(el => el.data());
//     setFireCollection(validateCreatingCard(beforeValidate));
//   };
//   useEffect(() => {
//     getData();
//   }, []);
  
//   useEffect(() => {
//     getData();
//   }, []);

  const article = fireCollection.map((el) => {
    return (
      <Route exact path={`/article/${el.id}`} key={el.id}>
        <Articles data={el} />
      </Route>
    );
  });

  return (
    <div className="app">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/article" />
        </Route>
        <Route exact path="/article">
          <Main data={fireCollection} />
        </Route>
        {article}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
