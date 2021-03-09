import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import index from './pages/index';
import './css/styles.css';
import './css/reset.css';



const Index: FunctionComponent = () => {

return (
<Router>
  <div>
    <Switch>
      <Route exact path="/" component={index} />
    </Switch>
  </div>
</Router>
)
}

export default Index;