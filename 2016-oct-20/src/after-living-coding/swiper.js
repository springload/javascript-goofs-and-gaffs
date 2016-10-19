import swipelib from 'swipe-js-iso';
import React, {Component} from 'react'

export default class Swiper extends Component {
    render(){
        return <div id='slider' className='swipe' ref="theswiper">
            <div className='swipe-wrap'>
                {this.props.children}
            </div>
        </div>
    }
    componentDidMount(){
        this.swiper = new swipelib(this.refs.theswiper, {
          speed: 400,
          auto: 3000,
          continuous: true,
          disableScroll: false,
          stopPropagation: false,
          callback: function(index, elem) {},
          transitionEnd: function(index, elem) {}
        });
    }
    componentWillUnmount(){
        this.swiper.kill();
    }

}


export class Page extends Component {
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}
