import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './TitledPic.module.scss';

const TitledPic = props => {
    return (
        <div className={classes.TitledPic} onClick={() => {props.onClick(props.userId)}} style={props.onClick ? {cursor: 'pointer'} : {}}>
            <div className={classes.img} style={{backgroundImage: `url(${props.img})`, ...props.imageStyle}} />
            <div className={classes.TitleContainer}>
                <div className={classes.title} style={props.titleStyle ? props.titleStyle : {}}>{props.title}</div>
                <div className={classes.caption}>{props.caption}</div>
            </div>
        </div>
    );
};

export default TitledPic;

TitledPic.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    caption: PropTypes.string,
    onClick: PropTypes.func,
    userId: PropTypes.string,
    imageStyle: PropTypes.object,
    titleStyle: PropTypes.object
};
TitledPic.defaultProps = {
    imageStyle: {}
};
