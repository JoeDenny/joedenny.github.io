import React, {Component} from "react";

class AppHero extends Component {
  state = {
    scrollPosition: 0
  }

  componentDidMount = () => {    
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
        
    if (window.scrollY > 0 && window.scrollY < 1000) {
      this.setState({ scrollPosition: 1 });
    } else if (window.scrollY >= 1000) {
      this.setState({ scrollPosition: 2 });
    } else {
      this.setState({ scrollPosition: 0 });
    }    
  }

  render() {
    let userScrollClass = 'scroll-position-' + this.state.scrollPosition;
    return (
      <main>
        <div className="display-flex">
            <div className={"background-image " + userScrollClass}>
              <ion-icon name="ios-arrow-round-down"></ion-icon>
            </div>
        </div>
        <div className={"hero-text text-right"}>
          <div className="inner-box">
            <h1>Joe Denny</h1> 
            <p>Web developer based in Montréal</p>
          </div>
        </div>
      </main>
    );
  }
}
export default AppHero;