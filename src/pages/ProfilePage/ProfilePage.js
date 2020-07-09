import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './ProfilePage.module.scss';
import PageBody from "../../containers/PageBody/PageBody";
import Posts from "../../containers/Posts/Posts";
import Page from "../../containers/Page/Page";
import TitledPic from "../../components/TitledPic/TitledPic";
import SearchBox from "../../components/SearchBox/SearchBox";
import TabSelection from "../../components/TabSelection/TabSelection";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import EmptyThumbnail from "../../components/EmptyThumbnail/EmptyThumbnail";
import store from 'store';
import axios from 'axios';
import PageDetails from "../../components/PageDetails/PageDetails";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import saved from "../../assets/saved.svg";
import back from "../../assets/back.svg";
import TitleBar from "../../components/TitleBar/TitleBar";
import moreButton from "../../assets/more.svg";
import {Menu, MenuItem} from "@material-ui/core";


const ProfilePage = props => {
    useEffect(() => {
        if (props.componentDidMount) props.componentDidMount();
        axios.post('/searchInPosts', {}, {withCredentials: true}).then(res => {
            setPosts(res.data)
        });
    }, []);
    const [posts, setPosts] = useState([]);
    const backButtonHandler = () => props.history.goBack();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Page>
            <TitleBar noShadow>
                {props.isMe && <b>My Profile</b>}
                <div style={{
                    width: 30,
                    height: 30,
                    position: 'absolute',
                    top: 14,
                    right: 5,
                    cursor: 'pointer',
                    textAlign: 'center'
                }}>
                    <img className={classes.moreButton} src={moreButton} onClick={handleClick} style={{height: 18}}/>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem
                            key={"Copy Link"}
                            onClick={() => {
                                handleClose();
                            }}>
                            Copy Link
                        </MenuItem>
                        <MenuItem
                            key={"Save Post"}
                            onClick={() => {
                                handleClose();
                            }}>
                            Save Post
                        </MenuItem>
                    </Menu>
                    {/*<img alt="" style={{cursor: 'pointer'}} src={saved}/>*/}
                </div>
                {
                    props.isMe || (
                        <div style={{width: 30, height: 30, position: 'absolute', left: 5, cursor: 'pointer'}}>
                            <img alt="" style={{cursor: 'pointer'}} src={back} onClick={backButtonHandler}/>
                        </div>
                    )
                }
            </TitleBar>
            <PageBody>
                <TitledPic
                    title={'MSKASHEF'}
                    caption={'@MSK.codes'}
                    imageStyle={{width: 100, height: 100, marginLeft: 10}}
                    titleStyle={{fontSize: 20}}
                    onClick={() => {
                    }}
                    img={'https://p0.pikist.com/photos/3/647/lotus-sen-vietnam-pink-natural-flower-nature-summer-tree.jpg'}
                />
                <div className={classes.about}>
                    Hey There I'm using PhotoZone!
                </div>
                {
                    props.isMe || (
                        <OrangeButton
                            text={"Message"}
                            onClick={() => {
                            }}
                            style={{width: 'calc(100% - 40px)', marginLeft: 20, height: 30}}
                        />
                    )
                }
                <PageDetails followers={10} followings={10} photos={10}/>
                <div className={classes.postsContainer}>
                    {
                        posts.map(post => (
                            <Thumbnail
                                key={JSON.stringify(post)}
                                src={post.photo}
                                hoverTitle={post.title}
                                onClick={() => {
                                    props.history.push(post.path);
                                }}
                            />
                        ))
                    }
                    {
                        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",].map(post => (
                            <EmptyThumbnail key={Math.random() + ":" + Math.random()}/>
                        ))
                    }
                </div>
            </PageBody>
        </Page>
    );
};

export default withRouter(ProfilePage);

ProfilePage.propTypes = {
    componentDidMount: PropTypes.func,
    isMe: PropTypes.bool,
};
ProfilePage.defaultProps = {};
