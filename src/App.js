import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import SummarizePage from './pages/summarize/SummarizePage'
import BlankPage from './pages/blank/BlankPage'
import SearchPage from './pages/search/SearchPage'
import MyPage from './pages/mypage/MyPage'
import OxPage from './pages/ox/OxPage'
import AIPage from './pages/ai/AIPage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import MyQuizPage from './pages/myquiz/MyQuizPage'
import Auth from './hoc/auth'
import Retest from './pages/retest/Retest';
import SelfStudyPage from './pages/selfstudy/SelfStudyPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/summarize" component={Auth(SummarizePage, true)} />
        <Route exact path="/blank" component={Auth(BlankPage, true)} />
        <Route exact path="/search" component={Auth(SearchPage, null)} />
        <Route exact path="/mypage" component={Auth(MyPage, true)} />
        <Route exact path="/oxpage" component={Auth(OxPage, true)} />
        <Route exact path="/ai" component={Auth(AIPage, true)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/myquiz" component={Auth(MyQuizPage, true)} />
        <Route exact path="/retest" component={Auth(Retest, true)} />
        <Route exact path="/selfstudy" component={Auth(SelfStudyPage, true)} />
      </Switch>
    </Router>
  );
}

export default App;
