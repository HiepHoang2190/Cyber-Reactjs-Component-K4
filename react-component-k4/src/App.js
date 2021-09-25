
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Home/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';
import Todolist from './pages/Todolist/Todolist';
import TodolistRedux from './pages/Todolist/TodolistRedux';
import TodolistRFC from './pages/Todolist/TodolistRFC';
import BaiTapToDoListSaga from './pages/BaiTapToDoListSaga/BaiTapToDoListSaga'
import LoadingComponent from './components/GlobalSetting/LoadingComponent';
import DemoHOCModal from './pages/DemoHOCModal/DemoHOCModal';
import Modal from './HOC/Modal/Modal';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs';
function App() {
  return (
    <BrowserRouter>
   
    <Modal/>
    <LoadingComponent/>
      <Switch>
        {/* <Route exact path='/home'  render={(propsRoute)=>{
          return <div>
             <Header/>
             <Home {...propsRoute}/>
          </div>
        }} /> */}
        < HomeTemplate path="/home" exact Component={Home}/>
        <HomeTemplate exact path='/contact' Component={Contact}/>
        <HomeTemplate exact path='/about' Component={About} />
        <UserLoginTemplate exact path='/login' Component={LoginCyberBugs} />
        <HomeTemplate exact path='/detail/:id' Component={Detail} />   
        <HomeTemplate exact path='/profile' Component={Profile} />  
        <HomeTemplate exact path='/todolistrfc' Component={TodolistRFC} />  
        <HomeTemplate exact path='/todolistrcc' Component={Todolist} />  
        <HomeTemplate exact path='/todolistredux' Component={TodolistRedux} />  
        <HomeTemplate exact path='/todolistsaga' Component={BaiTapToDoListSaga} />  
        <HomeTemplate exact path='/demohocmodal' Component={DemoHOCModal} />  
        <HomeTemplate exact path='/' Component={Home} />
        <HomeTemplate exact path='*' Component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
