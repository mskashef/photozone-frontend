import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import PageBody from "../../containers/PageBody/PageBody";
import Page from "../../containers/Page/Page";
import axios from 'axios';
import saved from "../../assets/saved.svg";
import TitleBar from "../../components/TitleBar/TitleBar";
import Chats from "../../containers/Chats/Chats";
import {connect} from 'react-redux';


const ChatsPage = props => {
    useEffect(() => {
        if (props.componentDidMount) props.componentDidMount();
        axios.post('/getChats',{}, {withCredentials: true}).then(res => {
            console.log(res.data)
            setChats(res.data);
        });
    }, []);

    const savedClickHandler = () => props.history.push('/savedPosts');

    const [chats, setChats] = useState([]);

    return (
        <Page>
            <TitleBar>
                <b>Chats</b>
                <div style={{width: 30, height: 30, position: 'absolute', right: 5, cursor: 'pointer'}}>
                    <img alt="" style={{cursor: 'pointer'}} src={saved} onClick={() => {savedClickHandler()}}/>
                </div>
            </TitleBar>
            <PageBody uid="ChatsPage">
                <Chats onChatSelect={chat => props.setOpenedChat(chat)} items={chats}/>
            </PageBody>
        </Page>
    );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    setOpenedChat: (val) => dispatch({type: "setOpenedChat", value: val})
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatsPage));

ChatsPage.propTypes = {
    componentDidMount: PropTypes.func
};
ChatsPage.defaultProps = {};
