import React           from 'react';
import QuestionsList   from './containers/QuestionsList';
import QuestionDetails from './containers/QuestionDetails';
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

const RQuestionsList   = withRouter(QuestionsList);
const RQuestionDetails = withRouter(QuestionDetails);

export default () => {
  return (
   <BrowserRouter>
     <Switch>
       <Route exact path='/' component={RQuestionsList}/>
       <Route path='/:id' component={RQuestionDetails}/>
     </Switch>
   </BrowserRouter>
  )
};
