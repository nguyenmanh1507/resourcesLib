import { connect } from 'react-redux';
import { fetchPosts, updateScrollPosition } from '../actions';
import SiteContent from '../components/SiteContent';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    updateScrollPosition: value => dispatch(updateScrollPosition(value)),
  };
}

const SiteContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteContent);

export default SiteContentContainer;
