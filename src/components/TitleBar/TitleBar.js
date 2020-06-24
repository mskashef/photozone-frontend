import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './TitleBar.module.scss';

const TitleBar = props => {
    return (
        <div className={classes.TitleBar}>
            {props.children}
        </div>
    );
};

export default TitleBar;

TitleBar.propTypes = {
    children: PropTypes.any
};
