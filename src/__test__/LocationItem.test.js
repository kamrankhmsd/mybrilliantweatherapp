import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import LocationItems from '../components/LocationItem';

Enzyme.configure({ adapter: new Adapter() });


describe('Form Component', () => {
    it('checks the number of links rendered', () => {

        const LocationItemsProps = {
            item: {
                woeid: 1234,
                title: 'sydney',
                location_type: 'city',
                latt_long: '1234,12345'
            }
        }
        const wrapper = shallow(<LocationItems {...LocationItemsProps} />);
        const locationItemli = wrapper.find('li');
        expect(locationItemli.length).toEqual(3);

        const locationItemul = wrapper.find('ul');
        expect(locationItemul.length).toEqual(1);

        const locationItemLink = wrapper.find('Link');
        expect(locationItemLink.length).toEqual(1);

    });
});



