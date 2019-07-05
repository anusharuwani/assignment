import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'antd/lib/popover';
import 'antd/lib/popover/style/css';

const CsPopover = ({ children, ...rest }) => <Popover {...rest}>{children}</Popover>;

CsPopover.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default CsPopover;
