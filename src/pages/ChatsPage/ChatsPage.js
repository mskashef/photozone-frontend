import React, {useEffect, useState, Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './ChatsPage.module.scss';
import PageBody from "../../containers/PageBody/PageBody";
import Page from "../../containers/Page/Page";
import TitledPic from "../../components/TitledPic/TitledPic";
import axios from 'axios';
import saved from "../../assets/saved.svg";
import TitleBar from "../../components/TitleBar/TitleBar";


const ChatsPage = props => {
    useEffect(() => {
        if (props.componentDidMount) props.componentDidMount();
        axios.post('/SearchInUsers',{}, {withCredentials: true}).then(res => {
            setUsers(res.data);
        });
    }, []);

    const [users, setUsers] = useState([]);

    return (
        <Page>
            <TitleBar>
                <b>Chats</b>
                <div style={{width: 30, height: 30, position: 'absolute', right: 5, cursor: 'pointer'}}>
                    <img alt="" style={{cursor: 'pointer'}} src={saved}/>
                </div>
            </TitleBar>
            <PageBody>
                <div className={classes.usersContainer}>
                    {
                        users.map(user => (
                            <Fragment key={Math.random()}>
                                <TitledPic
                                    title={user.name}
                                    caption={user.username}
                                    img={user.profpic}
                                    userId={user.username} onClick={() => {
                                    props.history.push("/chats/" + user.username)
                                }}/>
                                <div className={classes.line} />
                            </Fragment>
                        ))
                    }
                </div>
            </PageBody>
        </Page>
    );
};

export default withRouter(ChatsPage);

ChatsPage.propTypes = {
    componentDidMount: PropTypes.func
};
ChatsPage.defaultProps = {};
