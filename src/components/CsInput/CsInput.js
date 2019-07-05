import React from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import styles from './CsInput.module.scss';

const CsInput = ({ id, onChange, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <Input id={id} onChange={e => onChange(id, e.target.value)} {...rest} />
    </div>
  );
};

CsInput.propTypes = {};

export default CsInput;
