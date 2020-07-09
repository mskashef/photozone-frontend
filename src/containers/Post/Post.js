import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import classes from './Post.module.scss';
import TitledPic from "../../components/TitledPic/TitledPic";
import moreButton from '../../assets/more.svg';
import {Menu, MenuItem} from '@material-ui/core';

const Post = props => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.Post}>
            <div className={classes.photo} style={{backgroundImage: `url(${props.photo})`}} />
            <div className={classes.details}>
                <div className={classes.userContainer}>
                    <TitledPic
                        userId={props.publisherId}
                        title={props.title}
                        caption={props.publisherName}
                        img={props.publisherProfPic}
                        onClick={props.onPublisherClick}
                    />
                </div>
                <img className={classes.moreButton} src={moreButton} onClick={handleClick}/>

                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    {
                        props.moreOptions.map(option => (
                            <MenuItem
                                key={option.title}
                                selected={option === 'Pyxis'} onClick={() => {
                                option.onSelect(props.postId);
                                handleClose();
                            }}>
                                {option.title}
                            </MenuItem>
                        ))
                    }
                </Menu>
            </div>
        </div>
    );
};

export default Post;

Post.propTypes = {
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    publisherName: PropTypes.string.isRequired,
    publisherProfPic: PropTypes.string,
    onPublisherClick: PropTypes.func,
    moreOptions: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        onSelect: PropTypes.func
    })),
    postId: PropTypes.string,
    publisherId: PropTypes.string
};
