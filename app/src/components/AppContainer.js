import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Main from './Main';

function mapStateToProps(state) {

  console.log(state);
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default AppContainer;
