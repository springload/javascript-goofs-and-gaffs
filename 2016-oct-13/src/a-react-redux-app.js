import React, {Component} from 'react';

class AReactReduxApp extends Component {
  componentDidMount(){
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }
  render(){
    const { store } = this.context;
    const state = store.getState();
    return <h1>
      Best Site Is ZomBo
      <a href={'http://' + state.Search.text}>{state.Search.text}</a>
    </h1>
  }
}

AReactReduxApp.contextTypes = {store: React.PropTypes.object}

export default AReactReduxApp;
