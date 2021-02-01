import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from './components/Navigation'


/**Router 사용시 주의할 점!!
  / 와 /home 이 있다면 
  /home 의 /도 /로 인식해서 렌더링.. 두개의 페이지가 렌더링 됨
  완전히 동일한 path 만 인식하도록 하려면? exact={true}  추가!
*/

/**
 * { HashRouter, BrowseRouter } = Router
 * HashRouter 사용하면 url에 /#/ 따위가 자꾸 붙음 
 * BrowseRouter 사용하면 url에 /#/ 따위 없이 깔끔! -- but github page 설정이 까다로움
 */

function App() {
  return <HashRouter>
    <Navigation />
    <Route path='/' exact={true} component={Home} />
    <Route path='/about' component={About}/>
  </HashRouter>
}

export default App;