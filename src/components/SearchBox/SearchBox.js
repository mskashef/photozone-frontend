import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './SearchBox.module.scss';

const SearchBox = props => {
    return (
        <button className={classes.OrangeButton} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default SearchBox;

SearchBox.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    onClick: PropTypes.func
};
