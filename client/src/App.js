import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandindPage/LandingPage.jsx';
import Home from './components/Home/Home';
// import Activities from './components/Activity/activities';
// import CountryId from './components/Countries/CountryId';
// import NotFound from './components/NotFound/NotFound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from './actions/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch() //despachar todas las películas
    }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
