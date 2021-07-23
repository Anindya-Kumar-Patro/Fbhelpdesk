
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chatbody from './components/Chatbody/Chatbody';
import People from './components/People/People';
import Analytics from './components/Analytics/Analytics';
import Fblogin from './components/Fblogin/Fblogin';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Chatapp from './components/Chatapp/Chatapp';


function App() {
  return (
    <div className="App">
      
      {/* <Sidebar/>
      <Chatbody /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/chat" component={Chatapp}/>
          <Route path="/" component={Fblogin} />
          <Route path="/people" exact component={People} />
          <Route path="/analytics" exact component={Analytics}/>
        </Switch>
      </BrowserRouter>
      


    </div>
  );
}

export default App;
