import React, {Component} from 'react'
import Tabs, {Tab} from './tab-widget.js';
import CreditCard from './creditcard.js';

export default class TabContent extends Component {
    render(){
        return (
        <Tabs>
            <Tab label="First tab">
                first tab content. a bit boring eh?
            </Tab>
            <Tab label="Second tab tab">
                second tab content
                <img src="//i.imgur.com/aBtnQQE.jpg"/>
            </Tab>
            <Tab label="Third tab">
                third tab content
                <CreditCard/>
            </Tab>
        </Tabs>
    );
  }
}
