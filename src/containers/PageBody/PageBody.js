import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './PageBody.module.scss';

const PageBody = props => {
    return (
        <div className={classes.PageBody} style={props.style}>
            {props.children}
        </div>
    );
};

export default PageBody;

PageBody.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
};
PageBody.defaultProps = {
    children: null,
};
