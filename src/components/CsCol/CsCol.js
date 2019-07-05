import React from 'react';
import PropTypes from 'prop-types';
import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

const CsColumn = ({ children, ...rest }) => <Col {...rest}>{children}</Col>;

CsColumn.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default CsColumn;
