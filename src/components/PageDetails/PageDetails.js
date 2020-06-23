import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './PageDetails.module.scss';

const PageDetails = props => {
    return (
        <div className={classes.PageDetails} onClick={props.onClick}>
            <div className={classes.col}>
                <div id="photosCount">{props.photos}</div>
                <div>Photos</div>
            </div>
            <div className={classes.col}>
                <div id="followersCount">{props.followers}</div>
                <div>Followers</div>
            </div>
            <div className={classes.col}>
                <div id="followingsCount">{props.followings}</div>
                <div>Followings</div>
            </div>
        </div>
    );
};

export default PageDetails;

PageDetails.propTypes = {
    photos: PropTypes.number,
    followers: PropTypes.number,
    followings: PropTypes.number
};
