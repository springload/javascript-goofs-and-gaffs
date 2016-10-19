import React, {Component} from 'react'
import Style from 'react-inline-css';

export default class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTab: 0
        }
        this.stylePrefix = "cc-style-" + Math.random().toString(36).replace(/[^0-9a-f]/g, ''); // random enough
    }
    render(){
        return (
        <Style stylesheet={TAB_STYLE} namespace={this.stylePrefix}>
            <ol>
                {this.props.children.map( (tab, index) => {
                    return <li
                        onClick={this.changeTab.bind(this, index)}
                        key={index}
                        className={this.state.currentTab === index ? "tabs-selected" : "tabs-notselected"}>{tab.props.label}</li>
                } )}
            </ol>
            {this.props.children[this.state.currentTab]}
        </Style>
        );
    }
    changeTab(index){
        this.setState({
            currentTab: index
        })
    }
}

export class Tab extends Component {
    render(){
        return <div>{this.props.children}</div>
    }
}

const TAB_STYLE = `
    & .tabs-notselected,
    & .tabs-selected {
        display: inline-block;
        margin: 0px 0.5em;
        padding: 0.5em;
        cursor:pointer;
    }

    & .tabs-selected {
        background: pink;

    }

`;
