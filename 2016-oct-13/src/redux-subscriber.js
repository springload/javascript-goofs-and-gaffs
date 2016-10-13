import React, {Component} from 'react';
import store              from './store-async.js';

export default class App extends Component {
  render(){
    const {storeState} = this.props;

    return <h1>
      Best Site
      <a href={'http://' + storeState.Search.text}>{storeState.Search.text}</a>
    </h1>
  }
}
