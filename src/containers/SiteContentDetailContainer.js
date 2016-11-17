import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import SiteContentDetail from '../components/SiteContentDetail';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId)),
  };
}

const SiteContentDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SiteContentDetail);

export default SiteContentDetailContainer;
