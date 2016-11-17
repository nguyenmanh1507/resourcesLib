import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import SiteContent from '../components/SiteContent';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
}

const SiteContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteContent);

export default SiteContentContainer;
