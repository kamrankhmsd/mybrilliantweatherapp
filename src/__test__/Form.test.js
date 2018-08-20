import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Form from '../components/Form';

Enzyme.configure({ adapter: new Adapter() });


describe('Form Component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});



