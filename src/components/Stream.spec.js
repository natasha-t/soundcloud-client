import Stream from './Stream';
import { shallow } from 'enzyme';

// checks if the Stream component renders two divs with the class 'track'

describe('Stream', () => {

  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }],
  };

  it('shows two elements', () => {
    const element = shallow(<Stream { ...props } />);

    expect(element.find('.track')).to.have.length(2);
  });

});
