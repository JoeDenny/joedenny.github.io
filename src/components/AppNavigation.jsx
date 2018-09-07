import React, {Component} from "react";

import TabBarContainer from './tabs/TabBarContainer';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';

class AppNavigation extends Component {
 
  render() {
    const tabs = [
      {name : "about", label : "About me", component : AboutMe},
      {name : "projects", label : "Projects", component : Projects},
      {name : "contact", label : "Contact", component : Contact},
    ];

    return (
      <nav>
        <TabBarContainer tabs={tabs} />
      </nav>
    );
  }
}
export default AppNavigation;