import { connect } from 'react-redux';
import SiteSignIn from '../components/SiteSignIn';

function mapStateToProps(state) {
  return state;
}

const SiteSignInContainer = connect(mapStateToProps)(SiteSignIn);

export default SiteSignInContainer;
