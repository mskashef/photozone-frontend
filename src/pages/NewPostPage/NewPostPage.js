import React, {useEffect, useState, Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './NewPostPage.module.scss';
import PageBody from "../../containers/PageBody/PageBody";
import Page from "../../containers/Page/Page";
import TitledPic from "../../components/TitledPic/TitledPic";
import axios from 'axios';
import saved from "../../assets/saved.svg";
import TitleBar from "../../components/TitleBar/TitleBar";
import {TextField} from '@material-ui/core';
import Tags from "../../containers/Tags/Tags";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import ImageUpload from "../../components/ImageUpload/ImageUpload";


const NewPostPage = props => {
    useEffect(() => {
        if (props.componentDidMount) props.componentDidMount();
        axios.post('/SearchInUsers',{}).then(res => {
            setUsers(res.data);
        });
    }, []);


    const extractHashtags = str => {
        let tags = str.split(' ').filter(tag => tag.trim().length > 0);
        setTags(tags)
    };

    const [users, setUsers] = useState([]);
    const [tags, setTags] = useState([]);
    const [tagsValue, setTagsValue] = useState("");

    return (
        <Page>
            <TitleBar>
                <b>New Post</b>
                <div style={{width: 30, height: 30, position: 'absolute', right: 5, cursor: 'pointer'}}>
                    <img alt="" style={{cursor: 'pointer'}} src={saved}/>
                </div>
            </TitleBar>
            <PageBody style={{maxWidth: 500, margin: 'auto'}}>
                <br />
                <ImageUpload
                    onImageAdded={e => {
                        console.log(e.target.files[0]);
                    }}
                    inputId="postImageUpload"
                    text={'Upload post image...'}
                    style={{width: 'calc(100% - 20px)', marginLeft: 10}}
                />
                <TextField
                    label="Title"
                    defaultValue=""
                    variant="outlined"
                    placeholder="Enter the post title here..."
                    style={{margin: 10, width: 'calc(100% - 20px)'}}
                    autoFocus
                />
                <TextField
                    label="Caption"
                    defaultValue=""
                    variant="outlined"
                    placeholder="Enter the post caption here..."
                    style={{margin: 10, width: 'calc(100% - 20px)'}}
                    multiline
                    rows={5}
                />
                <TextField
                    label="Hashtags"
                    // defaultValue={tagsValue}
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
                   <Tags items={tags} />
               </div>
                <OrangeButton
                    text={"Publish post"}
                    onClick={() => {
                    }}
                    style={{width: 'calc(100% - 20px)', margin: 10}}
                />
                <br />
                <br />
                <br />
            </PageBody>
        </Page>
    );
};

export default withRouter(NewPostPage);

NewPostPage.propTypes = {
    componentDidMount: PropTypes.func
};
NewPostPage.defaultProps = {};
