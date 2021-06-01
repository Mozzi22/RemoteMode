import React from 'react';
import './App.css';
import  Articles  from '../Articles';
import  Main  from '../Main';
import  Header  from '../Header';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import data from '../../data/data.json';

function App() {
  const article = data.map((el) => {
    return (
      <Route exact path={`/article/${el.id}`} key={el.id}>
        <Articles description={el.articleDescr} src={el.img} title={el.description} />
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
        <Route exact path="/article" component={Main} />
        {article}
      </Switch>
    </Router>
    </div>
  );
}

export default App;