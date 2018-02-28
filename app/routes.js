import React                            from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionsList                    from './containers/QuestionsList';
import QuestionDetails                  from './containers/QuestionDetails';

export default () => {
  return (
   <BrowserRouter>
     <Switch>
       <Route exact path='/' component={QuestionsList}/>
       <Route path='/:id' component={QuestionDetails}/>
     </Switch>
   </BrowserRouter>
  )
};
