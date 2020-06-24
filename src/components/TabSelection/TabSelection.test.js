import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TabSelection from "./TabSelection";

it('TitleBar Test', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <TabSelection
            tabs={['Posts','Users']}
            activeTab={'Users'}
            onTabChange={func}
        />
    );

    wrapper.find('div#Posts').simulate('click');
    wrapper.find('div#Users').simulate('click');
    expect(func).toHaveProperty('callCount', 2);

    wrapper.setProps({
        activeTab: 'Posts'
    });
    expect(wrapper.find("div.TabSelectionActiveTab").first().text()).toEqual('Posts');

    wrapper.setProps({
        activeTab: 'Users'
    });
    expect(wrapper.find("div.TabSelectionActiveTab").first().text()).toEqual('Users');

});
