import React from 'react';
import PropTypes from 'prop-types';
import styles from './CsHeader.module.scss';
import CsIcon from '../CsIcon';

const CsHeader = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>Simplifya</p>
      <div className={styles.iconGroup}>
        <CsIcon style={{ fontSize: 18, color: 'white' }} type="bell" theme="filled" />
        <CsIcon style={{ fontSize: 18, color: 'white', marginLeft: 10 }} type="menu" />
      </div>
    </div>
  );
};

CsHeader.propTypes = {};

export default CsHeader;
