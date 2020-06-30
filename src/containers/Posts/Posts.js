import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './Posts.module.scss';
import Post from "../Post/Post";

const Posts = props => {
    return (
        <div className={classes.Posts}>
            {
                props.items.map(item => (
                    <Post
                        key={JSON.stringify(item)}
                        postId={item.postId}
                        publisherId={item.publisherId}
                        title={item.title}
                        photo={item.photo}
                        publisherName={item.publisherName}
                        publisherProfPic={item.publisherProfPic}
                        onPublisherClick={() => {
                            // TODO goto user profile page
                        }}
                        moreOptions={[
                            {
                                title: "Copy link", onSelect: (postId) => {
                                    alert("Copy link")
                                    // copy post url
                                }
                            },
                            {
                                title: "Save Posts", onSelect: (postId) => {
                                    alert("Save Posts")
                                    // download post image
                                }
                            },
                        ]}
                    />
                ))
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
