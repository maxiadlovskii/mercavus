import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure  } from 'enzyme';
configure({ adapter: new Adapter() });
import { shallowToJson } from 'enzyme-to-json';
import Button from '../../components/common/Button/Button';
import ErrorList from '../../components/common/ErrorList/ErrorList';
describe('Button', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Button />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Error List', () => {
  it('should render correctly', () => {
    const output = shallow(
        <ErrorList list={['ddd']}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});