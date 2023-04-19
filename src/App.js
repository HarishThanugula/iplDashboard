import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
    </Switch>
  </BrowserRouter>
)

export default App
