import { connect } from 'react-redux';

import { Piece } from '../components';
import handleCollision from '../actions/handleCollision';

const mapDispatchToProps = (dispatch, props) => ({
  onCollide: () => dispatch(handleCollision(props.key)),
});

const PieceContainer = connect(null, mapDispatchToProps)(Piece);

export default PieceContainer;
