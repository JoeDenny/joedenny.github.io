import React, {Component} from "react";

import TabBar from "./TabBar";

export default class TabBarContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab : ""
        } ;
    }

    onTabClick = (name) => {
        this.setState({currentTab : name});
    }

    render() {
        const {tabs, ...otherProps} = this.props;
        const {currentTab} = this.state;
        
        return (
            <TabBar
                {...otherProps}
                currentTab={currentTab}
                onTabClick={this.onTabClick}
                tabs={tabs}
            />
        )
    }
}