import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import {useRouteMatch,Route,Switch,Redirect, useLocation} from "react-router-dom";
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import cn from 'classnames';
import s from './style.module.css';
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import NotFound from "./routes/NotFound";
import {FireBaseContext} from "./context/firebaseContext";
import Firebase from "./service/firebase"


const App = () => {
  const location=useLocation();
  const isPadding=location.pathname==='/' || location.pathname==='/game/board'
  const match = useRouteMatch('/')
  return (
      <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFound}/>
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, {
              [s.isHomePage]: match.isExact
            })}>
              <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/home" component={HomePage}/>
              <Route path="/game" component={GamePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/contact" component={ContactPage}/>
              <Route render={()=>(
                <Redirect to="/404" />
              )}/>
              </Switch>
            </div>
            <Footer/>
          </>
        </Route>
      </Switch>
      </FireBaseContext.Provider> 
  )
};

export default App;