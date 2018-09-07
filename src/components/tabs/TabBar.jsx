import React from "react";

import Tab from "./Tab";
import ToggleDisplay from "../ToggleDisplay";

const TabBar = (props) => {
    const {tabs, currentTab, onTabClick, ...otherProps} = props;

    const tabItems = tabs.map(tabInfo => {
        const {name, label} = tabInfo;

        return (
            <Tab
                key={name}
                name={name}
                label={label}
                active={currentTab === name}
                onClick={onTabClick}
            />
        );
    });

    const tabPanels = tabs.map(tabInfo => {
      const {name, component : TabComponent} = tabInfo;
        return (
          <ToggleDisplay show={name === currentTab} key={name}>
              <TabComponent />
          </ToggleDisplay>
      )
    })

    return (
        <div>
            <ul  {...otherProps}>
                {tabItems}
            </ul>
            {tabPanels}
        </div>
    )
}

export default TabBar;