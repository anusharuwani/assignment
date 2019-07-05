import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

const CsRow = ({ children, ...rest }) => <Row {...rest}>{children}</Row>;

CsRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default CsRow;
