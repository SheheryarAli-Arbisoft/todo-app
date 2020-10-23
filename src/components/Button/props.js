import PropTypes from 'prop-types';

export const propTypes = {
  mode: PropTypes.string,
  labelStyle: PropTypes.object,
};

export const defaultProps = {
  mode: 'contained',
  labelStyle: {
    fontSize: 20,
  },
};
