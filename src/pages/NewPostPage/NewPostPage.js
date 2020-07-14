import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './NewPostPage.module.scss';
import PageBody from "../../containers/PageBody/PageBody";
import Page from "../../containers/Page/Page";
import axios from 'axios';
import store from 'store';
import saved from "../../assets/saved.svg";
import TitleBar from "../../components/TitleBar/TitleBar";
import {TextField} from '@material-ui/core';
import Tags from "../../containers/Tags/Tags";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import ImageUpload from "../../components/ImageUpload/ImageUpload";

const NewPostPage = props => {

    const extractHashtags = str => {
        let tags = str.split(' ').filter(
            (value, index, self) => value.trim().length > 0 && self.indexOf(value) === index
        );
        setTags(tags);
    };

    const publishPostHandler = () => {
        let data = new FormData();
        data.append('title', title);
        data.append('username', store.get('username'));
        data.append('caption', caption.split('\n').join('&lt%end_Of_Line%&gt'));
        data.append('tags', JSON.stringify(tags));
        data.append('photo', photo);

        axios.post('/publishNewPost', data, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            props.history.replace('/');
        }).catch(err => {
        });
    };

    const [tags, setTags] = useState([]);
    const [tagsValue, setTagsValue] = useState("");
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [photo, setPhoto] = useState(null);

    return (
        <Page>
            <TitleBar>
                <b>New Post</b>
                <div style={{width: 30, height: 30, position: 'absolute', right: 5, cursor: 'pointer'}}>
                    <img alt="" style={{cursor: 'pointer'}} src={saved}/>
                </div>
            </TitleBar>
            <PageBody uid="NewPostPage" style={{margin: 'auto'}}>
                <div className={classes.bodyWrapper}>
                    <div className={classes.ImageUploaderWrapper}>
                        <ImageUpload
                            onImageAdded={e => setPhoto(e.target.files[0])}
                            inputId="postImageUpload"
                            text={'Upload post image...'}
                            style={{width: 'calc(100% - 20px)', marginLeft: 10}}
                        />
                    </div>
                    <div className={classes.restWrapper}>
                        <TextField
                            value={title}
                            label="Title"
                            variant="outlined"
                            placeholder="Enter the post title here..."
                            style={{margin: 10, marginTop: 0, width: 'calc(100% - 20px)'}}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <TextField
                            value={caption}
                            label="Caption"
                            variant="outlined"
                            placeholder="Enter the post caption here..."
                            style={{margin: 10, width: 'calc(100% - 20px)'}}
                            multiline
                            rows={5}
                            onChange={e => setCaption(e.target.value)}
                        />
                        <TextField
                            label="Hashtags"
                            value={tagsValue}
                            variant="outlined"
                            placeholder="Post hashtags (separated with space)"
                            style={{margin: 10, width: 'calc(100% - 20px)'}}
                            onChange={e => {
                                setTagsValue(e.target.value);
                                extractHashtags(e.target.value);
                            }}
                        />
                        <div style={{padding: "0 10px"}}>
                            <Tags items={tags}/>
                        </div>
                        <OrangeButton
                            text={"Publish post"}
                            onClick={publishPostHandler}
                            style={{width: 'calc(100% - 20px)', margin: 10}}
                        />
                    </div>
                </div>
            </PageBody>
        </Page>
    );
};

export default withRouter(NewPostPage);

NewPostPage.propTypes = {
    componentDidMount: PropTypes.func
};
NewPostPage.defaultProps = {};
