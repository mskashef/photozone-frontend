import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './PageBody.module.scss';

const PageBody = props => {
    return (
        <div className={classes.PageBody}>
            {props.children}
        </div>
    );
};

export default PageBody;

PageBody.propTypes = {
    children: PropTypes.any,
};
PageBody.defaultProps = {
    children: null,
};
