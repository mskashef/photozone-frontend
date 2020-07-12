import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './PostPage.module.scss';
import TitleBar from "../../components/TitleBar/TitleBar";
import PageBody from "../../containers/PageBody/PageBody";
import Posts from "../../containers/Posts/Posts";
import Page from "../../containers/Page/Page";
import axios from "axios";
import saved from "../../assets/saved.svg";
import back from "../../assets/back.svg";
import TitledPic from "../../components/TitledPic/TitledPic";
import moreButton from "../../assets/more.svg";
import {Menu, MenuItem} from "@material-ui/core";
import Tags from "../../containers/Tags/Tags";
import SearchBox from "../../components/SearchBox/SearchBox";
import {backendBaseUrl} from '../../constants/js/constants';
import copy from "copy-to-clipboard";
import store from "store";

const PostPage = props => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (props.componentDidMount) props.componentDidMount();
        axios.post("/getPost", {postId: props.match.params.id}, {withCredentials: true}).then(res => {
            const data = res.data;
            setPostId(data.postId);
            setPostTitle(data.title);
            setPhoto(backendBaseUrl + data.photo);
            setPublisherName(data.publisherName);
            setPublisherProfilePic(backendBaseUrl + data.publisherProfPic);
            setPublisherId(data.publisherId);
            setCaption(data.caption);
            setTags(data.tags);
        }).catch(err => {
        });
    }, []);

    const [postTitle, setPostTitle] = useState("");
    const [postId, setPostId] = useState("");
    const [photo, setPhoto] = useState("");
    const [publisherName, setPublisherName] = useState("");
    const [publisherProfilePic, setPublisherProfilePic] = useState("");
    const [publisherId, setPublisherId] = useState("");
    const [caption, setCaption] = useState("");
    const [tags, setTags] = useState([]);

    const handlePublisherClick = userId => {
        props.history.push('/users/' + userId);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const backButtonHandler = () => props.history.goBack();

    return (
        <Page>
            <TitleBar>
                <b>Post</b>
                <div style={{width: 30, height: 30, position: 'absolute', right: 5, cursor: 'pointer'}}>
                    <img alt="" style={{cursor: 'pointer'}} src={saved}/>
                </div>
                <div style={{width: 30, height: 30, position: 'absolute', left: 5, cursor: 'pointer'}}>
                    <img alt="" style={{cursor: 'pointer'}} src={back} onClick={backButtonHandler}/>
                </div>
            </TitleBar>
            <PageBody>
                <div className={classes.Post}>
                    {/*<div className={classes.photo} style={{backgroundImage: `url(${photo})`}} />*/}
                    <div className={classes.leftSide}>
                        <img className={classes.photo} alt="" src={photo}/>
                        <div className={classes.details}>
                            <div className={classes.userContainer}>
                                <TitledPic
                                    userId={publisherId}
                                    title={publisherId}
                                    caption={publisherName}
                                    img={publisherProfilePic}
                                    onClick={handlePublisherClick.bind(this, publisherId)}
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
                                <MenuItem
                                    key={"Copy image address"}
                                    onClick={() => {
                                        copy(photo);
                                        handleClose();
                                    }}>
                                    Copy image address
                                </MenuItem>
                                <MenuItem
                                    key={"Save Post"}
                                    onClick={() => {
                                        axios.post('/savePost', {
                                            username: store.get('username'),
                                            postId: postId
                                        }).then((response) => {
                                            alert("Post saved!");
                                        }).catch((err) => {
                                        });
                                        handleClose();
                                    }}>
                                    Save Post
                                </MenuItem>
                            </Menu>

                        </div>
                    </div>
                    <div className={classes.rightSide}>
                        <h1>{postTitle}</h1>
                        <div className={classes.caption}>
                            {caption.split("&lt%end_Of_Line%&gt").map(line => <div>{line}</div>)}
                        </div>
                        <Tags items={tags}/>
                        <br/>
                    </div>
                </div>
            </PageBody>
        </Page>
    );
};

export default withRouter(PostPage);

PostPage.propTypes = {
    componentDidMount: PropTypes.func
};
PostPage.defaultProps = {};
