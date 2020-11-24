import React from 'react';
import './App.css';
import News from './News/News'
import Sidenews from './News/Sidenews'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      news1:{
        type:'top-headlines',
        query:'sources=bbc-news'
      },
      news2:{
        type:'everything',
        query:'domains=techcrunch.com&language=en'
      },
      news3:{
        type:'everything',
        query:'domains=comicbookmovie.com&language=en'
      }
    };
  }

  render(){
  return (
    //=======With Fetch Method
  //   <div className="App">
  //     <header className="App-header">
  //       <h1 className="App-title"> News of Today</h1>
  //     </header>
  //     <News news={this.state.news1}/>
  //     <News news={this.state.news2}/>
  //   </div>
  // );
  //=======With Axios Method
    <div className="containwer-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighten-4">
            <a href="/" className="bran-logo center">My Feed</a>
          </div>
        </nav>
      </div>
      <div className="row">
      <div className="col s8">
        <News news={this.state.news1}/>
        <News news={this.state.news2}/>
      </div>
      <div className="col s4">
        <Sidenews news={this.state.news3}/>
      </div>
      </div>
    </div>

  )}
}

export default App;
