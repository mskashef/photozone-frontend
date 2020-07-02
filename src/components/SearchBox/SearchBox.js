import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './SearchBox.module.scss';
import search from '../../assets/search.svg';

const SearchBox = props => {
    return (
        <div className={classes.SearchBox} style={props.style}>
            <input
                className={classes.input}
                type="search"
                onChange={e => props.onChangeText(e.target.value)}
                placeholder={props.placeholder}
                value={props.value}
            />
            <img src={search} alt={""} />
        </div>
    );
};

export default SearchBox;

SearchBox.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string
};
