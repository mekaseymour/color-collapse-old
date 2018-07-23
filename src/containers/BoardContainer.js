import { connect } from 'react-redux';

import Board from '../components/Board';

const mapStateToProps = state => ({
  board: state.board,
});

const BoardContainer = connect(mapStateToProps)(Board);

export default BoardContainer;
