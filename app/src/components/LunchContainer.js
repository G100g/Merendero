import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Lunch from './Lunch';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const LunchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lunch);

export default LunchContainer;
