import React from 'react';
import PropTypes from 'prop-types';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';
import styles from './CsSelect.module.scss';

const Option = Select.Option;

const getOptions = data => {
  const options = data.map(item => (
    <Option value={item.value} obj={item.item} key={item.value}>
      {item.label}
    </Option>
  ));

  return options;
};

const CsSelect = ({ id, data, onChange, ...rest }) => (
  <div className={styles.wrapper}>
    <Select id={id} onChange={value => onChange(id, value)} {...rest}>
      {getOptions(data)}
    </Select>
  </div>
);

CsSelect.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

CsSelect.defaultProps = {};

export default CsSelect;
