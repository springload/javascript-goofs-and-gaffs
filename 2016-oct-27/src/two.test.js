import React from 'react';
import { shallow } from 'enzyme';

test('Checking image tags', () => {
    // let wrapper2 = shallow(<div><img src="what"/></div>)

    const wrapper = shallow(
      <div>
        <span>Hello</span>
        <div>Goodbye</div>
        <span><img src="star.svg"/></span>
        <span>Again</span>
      </div>
    );

    expect(
        wrapper.contains(<img src="str.svg"/>)
    ).toBe(true);

});
