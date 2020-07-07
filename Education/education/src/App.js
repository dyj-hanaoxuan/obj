import React from 'react';
import Index from './Pages/Index'
import Login from './Pages/Login'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    HashRouter,
    Switch
} from 'react-router-dom'
import navRouter from "./Router/Router";
import AddCourse from './Components/Add/AddCourse';
function App() {
  return (
      <Router>
          <div>
              <HashRouter>
                  <Switch>
                      <Route path="/" exact render={()=><Redirect to="/Login"/>}/>
                      <Route path="/Login" component={Login}/>
                      <Route path="/Index" render={()=>
                          <Index>
                              <navRouter/>
                              <AddCourse/>
                          </Index>
                      }/>
                  </Switch>
              </HashRouter>
          </div>
      </Router>
  );
}

export default App;
