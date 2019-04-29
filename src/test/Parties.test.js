import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Parties from '../containers/Parties';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

const store = mockStore({});

describe('<Parties />', () => {
  it('renders one <Parties /> component', () => {
    const component = shallow(
    <Provider store={store}>
      <Parties />
    </Provider>
    );
    expect(component).toHaveLength(1);
  })
})
