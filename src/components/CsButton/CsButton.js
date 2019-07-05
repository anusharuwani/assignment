import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

const CsButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
};

CsButton.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

export default CsButton;
