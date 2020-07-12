import React from 'react';
import axios from 'axios';
import store from 'store';
import * as PropTypes from 'prop-types';
import classes from './Posts.module.scss';
import Post from "../Post/Post";
import {backendBaseUrl} from '../../constants/js/constants';
import copy from "copy-to-clipboard";
import {withRouter} from 'react-router-dom';
import FlatList from 'flatlist-react';



const Posts = props => {
    const renderPost = (item) => {
        return (
            <Post
                key={JSON.stringify(item)}
                postId={item.postId}
                publisherId={item.publisherId}
                title={item.title}
                photo={backendBaseUrl + item.photo}
                publisherName={item.publisherName}
                publisherProfPic={backendBaseUrl + item.publisherProfPic}
                onClick={() => props.history.push('/posts/' + item.postId)}
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
        );
    };
    return (
        <div className={classes.Posts}>
            {
                props.items.length > 0 ? (
                    <FlatList
                        list={props.items}
                        renderItem={renderPost}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                        // sortBy={["firstName", {by: "lastName", descending: true}]}
                        // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
                    />
                ) : (
                    <div className={classes.noPosts}>No Posts yet.</div>
                )
            }

        </div>
    );
};

export default withRouter(Posts);

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
