import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Post from "./Post";

it('NewPostSvgIcon Test', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <Post
            tabs={['HomePage','Users']}
            activeTab={'Users'}
            onTabChange={func}
        />
    );

    wrapper.find('div#HomePage').simulate('click');
    wrapper.find('div#Users').simulate('click');
    expect(func).toHaveProperty('callCount', 2);

    wrapper.setProps({
        activeTab: 'HomePage'
    });
    expect(wrapper.find("div.TabSelectionActiveTab").first().text()).toEqual('HomePage');

    wrapper.setProps({
        activeTab: 'Users'
    });
    expect(wrapper.find("div.TabSelectionActiveTab").first().text()).toEqual('Users');

});
