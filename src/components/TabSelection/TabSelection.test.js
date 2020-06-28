import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TabSelection from "./TabSelection";

it('NewPostSvgIcon Test', () => {
    const func = sinon.spy();
    const wrapper = shallow(
        <TabSelection
            tabs={['PageBody','Users']}
            activeTab={'Users'}
            onTabChange={func}
        />
    );

    wrapper.find('div#PageBody').simulate('click');
    wrapper.find('div#Users').simulate('click');
    expect(func).toHaveProperty('callCount', 2);

    wrapper.setProps({
        activeTab: 'PageBody'
    });
    expect(wrapper.find("div.TabSelectionActiveTab").first().text()).toEqual('PageBody');

    wrapper.setProps({
        activeTab: 'Users'
    });
    expect(wrapper.find("div.TabSelectionActiveTab").first().text()).toEqual('Users');

});
