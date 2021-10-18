import MainPage from './pages/MainPage'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import { Router, Switch, Route } from 'react-router';
import Themes from './pages/Themes';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>


      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/themes">
          <Themes />
        </Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
