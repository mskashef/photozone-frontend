import React from 'react';
import axios from 'axios';
import store from 'store';
import * as PropTypes from 'prop-types';
import classes from './Posts.module.scss';
import Post from "../Post/Post";
import {backendBaseUrl} from '../../constants/js/constants';
import copy from "copy-to-clipboard";

const Posts = props => {
    return (
        <div className={classes.Posts}>
            {
                props.items.length > 0 ? props.items.map(item => (
                    <Post
                        key={JSON.stringify(item)}
                        postId={item.postId}
                        publisherId={item.publisherId}
                        title={item.title}
                        photo={backendBaseUrl + item.photo}
                        publisherName={item.publisherName}
                        publisherProfPic={backendBaseUrl + item.publisherProfPic}
                        onPublisherClick={() => {
                            // TODO goto user profile page

                        }}
                        moreOptions={[
                            {
                                title: "Copy image address", onSelect: (postId) => {
                                    copy(backendBaseUrl + item.photo)
                                    // copy post url
                                }
                            },
                            {
                                title: "Save Posts", onSelect: (postId) => {
                                    axios.post('/savePost', {username: store.get('username'), postId: postId}).then((response) => {

                                    }).catch((err) => {
                                        console.log(err)
                                    });
                                    // download post image
                                }
                            },
                        ]}
                    />
                )) : (
                    <div className={classes.noPosts}>No Posts yet.</div>
                )
            }
        </div>
    );
};

export default Posts;

Posts.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        photo: PropTypes.string,
        publisherName: PropTypes.string,
        publisherProfPic: PropTypes.string,
        onPublisherClick: PropTypes.func,
        moreOptions: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            onSelect: PropTypes.func
        })),
        postId: PropTypes.string,
        publisherId: PropTypes.string
    }))
};
