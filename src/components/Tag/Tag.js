import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './Tag.module.scss';

const Tag = props => {
    return (
        <button className={classes.Tag}>
            {props.value}
        </button>
    );
};

export default Tag;

Tag.propTypes = {
    value: PropTypes.string
};
