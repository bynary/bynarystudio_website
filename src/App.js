import React, { Component } from 'react';
import './App.css';

class App extends Component {

  renderHeader(){
    return (
      <Header></Header>
    );
  }

  renderMain(){
    return (
      <Main></Main>
    );
  }

  renderFooter(){
    return (
      <Footer></Footer>
    );
  }

  render() {
    return (
        <React.Fragment>
          {this.renderHeader()}
          {this.renderMain()}
          {this.renderFooter()}
        </React.Fragment>
    );
  }
}

function Header(props) {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Bynary Studio</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#"><Icon name="home"></Icon> Home</a>
            <a className="nav-link" href="#"><Icon name="user-circle"></Icon> Contact</a>
          </nav>
        </div>
      </header>
    );
}

function Main(props) {
    return (
      <main role="main" className="inner cover">
        <div className="container"> 
          <div className="row">
            <div className="col">

            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="cover-heading">code + design</h1>
              <p className="lead">I write code. I do design. I love combining them.</p>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </main>
    );
}

function Footer(props) {
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p><Icon name="copyright"></Icon> 2018 by bynary studio llc</p>
        </div>
      </footer>
    );
}

function Icon(props) {
  let iconClass = "fas fa-" + props.name;
  return (
    <i className={iconClass}></i>
  );
}

export default App;
