import React from 'react';
import { shallow } from 'enzyme';
import ProfileSvgIcon from "./ProfileSvgIcon";
import sinon from "sinon";

it('NewPostSvgIcon Test', () => {
    const func = sinon.spy();
    const activeColor = "#000";
    const color = "#999";
    const wrapper = shallow(
        <ProfileSvgIcon
            active={false}
            color={color}
            activeColor={activeColor}
            onClick={func}
        />
    );

    expect(wrapper.find('#Path_17').first().props().fill).toEqual(color);
    expect(wrapper.find('#Path_18').first().props().fill).toEqual(color);

    wrapper.setProps({active: true});

    expect(wrapper.find('#Path_17').first().props().fill).toEqual(activeColor);
    expect(wrapper.find('#Path_18').first().props().fill).toEqual(activeColor);

    wrapper.simulate('click');
    expect(func).toHaveProperty('callCount', 1);
});
