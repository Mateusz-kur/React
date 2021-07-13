import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';


const Column = props => (
    <section className={styles.component}>
        <h3 className={styles.title}>{props.title}</h3>
    </section>
)

Column.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
}

export default Column;