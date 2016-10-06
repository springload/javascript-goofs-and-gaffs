import React from 'react';

class BaseComponent extends React.Component {
  renderName(){
    return this.props.name;
  }
}

export class NewsPage extends BaseComponent {
  renderName(){
    return "(In NewsPage) " + super.renderName();
  }
}

class NewsAboutGlobalWarmingPage extends NewsPage {
  render(){
    return <b>geoengineering?</b>;
  }
}

export default class App extends NewsAboutGlobalWarmingPage {
  render(){
    return <h1>Hi {this.renderName()}</h1> ;
  }
}
