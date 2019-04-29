import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Party from '../components/Party';

configure({ adapter: new Adapter() });

const id = 1;
const partyName = 'APC';

describe('<Parties />', () => {
  it('renders one <Party /> component', () => {
    const component = shallow(<Party key={ id } party={ partyName } col={3} />);
    expect(component).toHaveLength(1);
  })
})
