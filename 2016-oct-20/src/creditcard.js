import React, {Component} from 'react'
import MaskedInput from 'react-maskedinput';
import Style from 'react-inline-css';

export default class CreditCard extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
        this.flip = this.flip.bind(this);
        this.stylePrefix = "cc-style-" + Math.random().toString(36).replace(/[^0-9a-f]/g, ''); // random enough
    }

    render(){
        return (
        <div>
            <p style={{fontSize:'x-small'}}>Thanks to <a href="http://package.elm-lang.org/packages/abadi199/elm-creditcard/latest">Elm Credit Card</a> for the SVG images!</p>
            <Style stylesheet={CREDITCARD_STYLE} namespace={this.stylePrefix} className={this.state && this.state.flip ? "cc-show-back" : "cc-show-front" }>
                <div className="cc-card cc-front">
                    {this.renderIcon()}
                    <img src="svg/chip.svg" className="cc-chip"/>
                    <MaskedInput mask="1111 1111 1111 1111" name="card" className="cc-text cc-number" size="20" required onChange={this.onChange}/>
                    <span className="cc-month-year-label cc-label">Month/Year</span>
                    <MaskedInput mask="11/11" name="month-year" className="cc-text2 cc-month-year" size="20" required onChange={this.onChange}/>
                </div>
                <div className="cc-card cc-back">
                    <div className="cc-blackstrip"/>
                    <div className="cc-whitestrip"/>
                    <label className="cc-cvv-label cc-label"><abbr title="Card Verification Value">CVV:</abbr></label>
                    <MaskedInput mask="111" name="cvv" className="cc-cvv" size="20" required onChange={this.onChange}/>
                </div>
                <button onClick={this.flip} className="cc-next">Next</button>
            </Style>


        </div>
        )
    }

    flip(){
        this.setState({
            flip: this.state ? !this.state.flip : true
        });
    }

    renderIcon(){
        if(!this.state || !this.state.card) return null;

        const cardNumber = this.state.card.replace(/[^0-9]/g, '');

        if(cardNumber.match(VISA_REGEX)){
            return <img src="svg/visa.svg" className="cc-brand"/>;
        } else if(cardNumber.match(MASTERCARD_REGEX)){
            return <img src="svg/mastercard.svg" className="cc-brand"/>;
        }
        return null;
    }

    onChange(e) {
        let stateChange = {};
        stateChange[e.target.name] = e.target.value;
        this.setState(stateChange);
    }
}

const CREDITCARD_STYLE = `
    @font-face {
      font-family: 'SourceCodePro';
      src: url('SourceCodePro-BoldIt.otf.woff2');
    }

    &,
    & * {
        box-sizing: border-box;
    }

    & {
        perspective: 500;
        -webkit-perspective: 500;
        -moz-perspective: 500;
        margin: 0 auto;
        width:320px;
    }

    & > .cc-card {
        position:absolute;
        background-image: linear-gradient(to left, #3a7bd5 , #3a6073);
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 1em;
        width: 320px;
        height: 170px;
        box-sizing: border-box;
        border-radius: 6px;
        transform-style: preserve-3d;
        transform-origin: 50% 50%;
        transition: all 2s;
    }

    &.cc-show-front > .cc-front {
        transform: rotateY(0deg);
        z-index:2;
    }

    &.cc-show-front > .cc-back {
        transform: rotateY(180deg);
        z-index:1;
    }


    &.cc-show-back > .cc-front {
        transform: rotateY(180deg);
        z-index:1;
    }

    &.cc-show-back > .cc-back {
        transform: rotateY(360deg);
        z-index:2;
    }

    & .cc-next {
        position:absolute;
        right: 0px;
        top: 180px;
        background: #369;
        color: #fff;
        border: none;
        padding: 0.5em 1em;
        border-radius: 4px;
        cursor:pointer;
    }


    & .cc-text {
        background: none;
        font-size:inherit;
        font-family: SourceCodePro, monospace;
        color: #369;
        border: none;
        outline:none;
        text-shadow: -1px -1px 1px white, 1px 1px 1px black, -1px -1px 2px white, 1px 1px 2px black;
        padding: 0.1em;
        box-sizing: border-box;
        transition: all .2s;
    }

        & .cc-text:invalid {
            background: none;
        }

        & .cc-text:focus {
            background-color: rgba(255,255,255,0.8);
            color: black;
            text-shadow: none;
        }

        & .cc-text::-webkit-input-placeholder {
            color: white;
            text-shadow: none;
        }

        & .cc-text::-moz-placeholder {
            color: white;
            text-shadow: none;
        }

    & .cc-text2 {
        background: none;
        font-size:inherit;
        font-family: SourceCodePro, monospace;
        color: #369;
        border: none;
        outline:none;
        text-shadow: -1px -1px 0.25px white, 1px 1px 0.25px black;
        padding: 0.5em;
        transition: all .2s;
    }

        & .cc-text2:invalid {
            background: none;
        }

        & .cc-text2:focus {
            background-color: rgba(255,255,255,0.8);
            color: black;
            text-shadow: none;
        }

        & .cc-text2::-webkit-input-placeholder {
            color: white;
            text-shadow: none;
        }

        & .cc-text2::-moz-placeholder {
            color: white;
            text-shadow: none;
        }

    & .cc-number {
        font-size:23px;
        position:absolute;
        top:80px;
        left:25px;
        width: 265px;
    }

    & .cc-chip {
        position:absolute;
        width: 30px;
        top: 50px;
        left: 30px;
    }

    & .cc-month-year-label {
        position:absolute;
        left: 235px;
        top: 124px;
        font-size: 10px;
    }

    & .cc-month-year {
        position:absolute;
        top: 130px;
        left: 250px;
        width: 50px;
        font-size: 12px;
    }

    & .cc-label {
        color: white;
        font-family: SourceCodePro, monospace;
    }

    & .cc-brand {
        position: absolute;
        left: 250px;
        width: 40px;
        background: rgba(255,255,255,0.9);
        border-radius: 5px;
        padding: 5px;
    }

    & .cc-blackstrip {
        position:absolute;
        top: 30px;
        left: 0px;
        height: 30px;
        width:100%;
        background:black;
    }

    & .cc-whitestrip {
        position:absolute;
        top: 70px;
        left: 20px;
        height: 30px;
        width:80%;
        background:white;
    }

    & .cc-cvv-label {
        position:absolute;
        left: 200px;
        top: 75px;
        color:black;
    }

    & .cc-cvv {
        position:absolute;
        left: 235px;
        outline:none;
        top: 73px;
        width:40px;
        border:none;
        padding:5px;
    }
`;

 const VISA_REGEX = /^4/;

 const MASTERCARD_REGEX = /^5/;
