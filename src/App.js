import React, { Component} from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './common/header';
import './style.js';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Sign from './pages/sign';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyleFont />
        <Provider store = {store}>
            <BrowserRouter>
              <div>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id'exact component={Detail}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/sign' exact component={Sign}></Route>
                <Route path='/write' exact component={Write}></Route>
              </div>
            </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
