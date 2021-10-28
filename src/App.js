import MainPage from './pages/MainPage'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import { Switch, Route } from 'react-router';
import Themes from './pages/Themes';
import { BrowserRouter } from 'react-router-dom';
import Privacy from './pages/Privacy';



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
        <Route path="/privacy">
          <Privacy />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
