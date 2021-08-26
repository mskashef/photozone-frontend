import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import TitleBar from "../../components/TitleBar/TitleBar";
import PageBody from "../../containers/PageBody/PageBody";
import Posts from "../../containers/Posts/Posts";
import Page from "../../containers/Page/Page";
import axios from "axios";
import saved from "../../assets/saved.svg";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

let interval;
const HomePage = props => {
    const getPosts = () => {
        if (props.componentDidMount) props.componentDidMount();
        if (!props.posts || props.posts.length === 0) {
            axios.post("/getPosts", {}, {withCredentials: true}).then(res => {
                props.setHomePagePosts(res.data);
            }).catch(() => {});
        }
    }
    useEffect(() => {
        getPosts();
        interval = setInterval(getPosts, 1000)
        return () => clearInterval(interval)
    }, []);
    const handleSavedPostsClick = () => props.history.push('/savedPosts');
    return (
        <Page>
            <TitleBar>
                <b>PhotoZone</b>
                <div style={{width: 30, height: 30, position: 'absolute', right: 5, cursor: 'pointer'}} onClick={handleSavedPostsClick}>
                    <img alt="" style={{cursor: 'pointer'}} src={saved}/>
                </div>
            </TitleBar>
            <PageBody uid={"HomePage"}>
                <Posts items={props.posts ? props.posts : []}/>
            </PageBody>
        </Page>
    );
};

const mapStateToProps = state => {
    return {
        posts: state.homePagePosts
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setHomePagePosts: (val) => dispatch({type: "setHomePagePosts", value: val})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));

HomePage.propTypes = {
    componentDidMount: PropTypes.func
};
HomePage.defaultProps = {};
