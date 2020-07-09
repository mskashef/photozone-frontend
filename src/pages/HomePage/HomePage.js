import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import classes from './HomePage.module.scss';
import TitleBar from "../../components/TitleBar/TitleBar";
import PageBody from "../../containers/PageBody/PageBody";
import Posts from "../../containers/Posts/Posts";
import Page from "../../containers/Page/Page";
import axios from "axios";
import store from "store";
import saved from "../../assets/saved.svg";
import {withRouter} from 'react-router-dom';

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const HomePage = props => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (props.componentDidMount) props.componentDidMount();
        axios.post("/getPosts", {username: store.get('username')}, {withCredentials: true}).then(res => {
            console.log(res);
            setPosts(res.data);
        }).catch(() => {});
    }, []);
    return (
        <Page>
            <TitleBar>
                <b>PhotoZone</b>
                <div style={{width: 30, height: 30, position: 'absolute', right: 5, cursor: 'pointer'}}>
                    <img alt="" style={{cursor: 'pointer'}} src={saved}/>
                </div>
            </TitleBar>
            <PageBody>
                <Posts items={posts}/>
            </PageBody>
        </Page>
    );
};

export default withRouter(HomePage);

HomePage.propTypes = {
    componentDidMount: PropTypes.func
};
HomePage.defaultProps = {};
