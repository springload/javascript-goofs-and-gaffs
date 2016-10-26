import React, {Component} from 'react';
import { shallow, render } from 'enzyme';

class Toggle extends Component {
    render(){
        if(this.props.expanded){
            return (
                <div>
                    Expanded
                    {this.props.children}
                </div>
            );
        } else {
            return <div>Collapsed <img src="star.svg"/></div>;
        }
    }
}


test('Checking collapsed', () => {
    // let wrapper2 = shallow(<div><img src="what"/></div>)

    const wrapper = shallow(
      <Toggle/>
    );

    expect(
        wrapper.text()
    ).toContain("Collapsed");

});

test('Checking expanded', () => {
    const wrapper = shallow(
      <Toggle expanded={true}/>
    );

    expect(
        wrapper.text()
    ).toContain("Expanded");

});


test('Checking shallow', () => {
    const wrapper = render(
      <Toggle expanded={true}>
          <Toggle/>
      </Toggle>
    );

    expect(
        wrapper.text()
    ).toContain("Expanded");

    expect(
        wrapper.text()
    ).toContain("Collapsed");

});
