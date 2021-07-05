import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipesList from "./Components/RecipesList";
import AppNavbar from "./Components/AppNavbar";
import HomePage from "./Components/HomePage";
import Clicker from "./Components/Clicker";
import RecipeEdit from "./Components/RecipeEdit";

const App=() =>{
  return (
      <Router>

        <Switch>
            <>
            <AppNavbar/>
          <Route path='/clicker' exact={true} component={Clicker}/>
            <Route path='/'  component={HomePage}/>
          <Route path='/recipes' component={RecipesList}/>
                <Route path='/recipes/:id' component={RecipeEdit}/>
            </>
        </Switch>
      </Router>
  );
}

export default App;
