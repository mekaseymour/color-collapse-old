import { connect } from 'react-redux';

import { Homescreen } from '../components';
import generateBoard from '../actions/generateBoard';

const mapDispatchToProps = (dispatch, props) => ({
  onPress: () => dispatch(generateBoard(props)),
});

const HomescreenContainer = connect(null, mapDispatchToProps)(Homescreen);

export default HomescreenContainer;
