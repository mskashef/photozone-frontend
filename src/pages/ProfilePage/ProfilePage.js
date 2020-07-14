import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './ProfilePage.module.scss';
import PageBody from "../../containers/PageBody/PageBody";
import Page from "../../containers/Page/Page";
import TitledPic from "../../components/TitledPic/TitledPic";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import EmptyThumbnail from "../../components/EmptyThumbnail/EmptyThumbnail";
import store from 'store';
import axios from 'axios';
import PageDetails from "../../components/PageDetails/PageDetails";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import back from "../../assets/back.svg";
import TitleBar from "../../components/TitleBar/TitleBar";
import moreButton from "../../assets/more.svg";
import {Menu, MenuItem} from "@material-ui/core";
import {connect} from 'react-redux';
import {backendBaseUrl} from '../../constants/js/constants';

const ProfilePage = props => {
    useEffect(() => {
        if (props.componentDidMount) props.componentDidMount();
        axios.post('/getUserInfo', {myUsername: store.get('username'), username: props.isMe ? store.get('username') : props.match.params.id}, {withCredentials: true}).then(res => {
            const data = res.data;
            setUsername(data.username);
            setName(data.name);
            setPhoto(data.profPic);
            setBio(data.bio);
            setFollowersCount(data.followersCount);
            setFollowingsCount(data.followingsCount);
            setPostsCount(data.postsCount);
            setAmIFollowing(data.amIFollowing);
        }).catch(err => {});
        axios.post('/getPostsOfUser', {username: props.isMe ? store.get('username') : props.match.params.id}, {withCredentials: true}).then(res => {
            setPosts(res.data);
        }).catch(err => {});
    }, []);
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [bio, setBio] = useState('');
    const [amIFollowing, setAmIFollowing] = useState(false);
    let me = store.get('username');
    let isMe = (props.isMe || props.match.params.id === me);

    const [followersCount, setFollowersCount] = useState(1);
    const [followingsCount, setFollowingsCount] = useState(1);
    const [postsCount, setPostsCount] = useState(0);

    const backButtonHandler = () => props.history.goBack();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMessage = () => {
        props.history.push('/chats/' + props.match.params.id);
    };

    const handleFollowOrUnfollow = () => {
        axios.post('/followOrUnfollow', {follow: !amIFollowing, userId: props.match.params.id}).then(res => {
            setFollowersCount(followersCount - (amIFollowing ? 1 : -1));
            setAmIFollowing(!amIFollowing);
        }).catch(err => {});
    };


    return (
        <Page>
            <TitleBar noShadow>
                {isMe && <b>My Profile</b>}
                <div style={{
                    width: 30,
                    height: 30,
                    position: 'absolute',
                    top: 14,
                    right: 5,
                    cursor: 'pointer',
                    textAlign: 'center'
                }}>
                    <img alt="" className={classes.moreButton} src={moreButton} onClick={handleClick} style={{height: 18, paddingLeft: 20}}/>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        {
                            isMe ? (
                                <div>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose();
                                        }}>
                                        Edit name
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose();
                                        }}>
                                        Edit username
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose();
                                        }}>
                                        Edit bio
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose();
                                        }}>
                                        Change profile image
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose();
                                        }}>
                                        Sign out
                                    </MenuItem>
                                </div>
                            ) : (
                                <div>
                                    <MenuItem
                                        onClick={() => {
                                            alert("Sorry. This option is not available in this version.");
                                            handleClose();
                                        }}>
                                        Block user
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose();
                                        }}>
                                        Message
                                    </MenuItem>
                                </div>
                            )
                        }
                    </Menu>

                </div>
                {
                    props.isMe || (
                        <div style={{width: 30, height: 30, position: 'absolute', left: 5, cursor: 'pointer'}}>
                            <img alt="" style={{cursor: 'pointer'}} src={back} onClick={backButtonHandler}/>
                        </div>
                    )
                }
            </TitleBar>
            <PageBody uid="ProfilePage">
                <TitledPic
                    title={name}
                    caption={username}
                    imageStyle={{width: 100, height: 100, marginLeft: 10}}
                    titleStyle={{fontSize: 20}}
                    onClick={() => {
                    }}
                    img={backendBaseUrl + photo}
                />
                <div className={classes.about}>{bio}</div>
                {
                    isMe || (
                        <>
                            <div className={classes.buttons}>
                                <OrangeButton
                                    text={amIFollowing ? "Unfollow" : "Follow"}
                                    onClick={handleFollowOrUnfollow}
                                    style={{margin: 10, height: 30}}
                                />
                                <OrangeButton
                                    text={"Message"}
                                    onClick={handleMessage}
                                    style={{margin: 10, height: 30}}
                                />
                            </div>
                        </>
                    )
                }
                <PageDetails
                    followers={Number(followersCount) - 1}
                    followings={Number(followingsCount) - 1}
                    photos={Number(postsCount)}
                />
                <div className={classes.postsContainer}>
                    {
                        posts.map(post => (
                            <Thumbnail
                                key={post.postId}
                                src={backendBaseUrl + post.photo}
                                hoverTitle={post.title}
                                onClick={() => {
                                    props.history.push('/posts/' + post.postId);
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

const mapStateToProps = state => {
    return {
        username: state.username
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setHomePagePosts: (val) => dispatch({type: "setHomePagePosts", value: val})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage));

ProfilePage.propTypes = {
    componentDidMount: PropTypes.func,
    isMe: PropTypes.bool,
};
ProfilePage.defaultProps = {};
