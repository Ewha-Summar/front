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

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/summarize" component={SummarizePage} />
          <Route exact path="/blank" component={BlankPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/oxpage" component={OxPage} />
          <Route exact path="/ai" component={AIPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          </Switch>
          
    </Router>
  );
}

export default App;
