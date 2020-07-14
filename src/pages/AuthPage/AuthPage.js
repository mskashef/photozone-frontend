import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './AuthPage.module.scss';
import PageBody from "../../containers/PageBody/PageBody";
import Page from "../../containers/Page/Page";
import bg from "../../assets/AuthPage/authBg.png";
import logo from "../../assets/AuthPage/logo.svg";
import AuthTextField from "../../components/AuthTextField/AuthTextField";
import AuthButton from "../../components/AuthButton/AuthButton";
import axios from 'axios';
import {connect} from 'react-redux';
import store from 'store';

const states = {
    auth: 0,
    signIn: 1,
    signUp: 2
};

const AuthPage = props => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [state, setState] = useState(states.auth);

    const handleAuthTypeChange = state => {
        setState(state);
    };

    const submitFormHandler = (currentState) => {
        if (state === states.auth) {
            handleAuthTypeChange(currentState);
            return;
        }
        if (state === states.signUp && password !== repeatPassword) {
            alert("Passwords do not match!");
            return;
        }
        const information = {
            name: name,
            username: username,
            password: password,
            type: state
        };
        axios.post('/auth', information, {withCredentials: true}).then(res => {
            const token = res.data.token;
            const username = res.data.username;
            store.set('username', username);
            store.set('token', token);
            axios.defaults.headers.common['token'] = token;
            axios.defaults.headers.common['username'] = username;
            props.history.replace('/');
        }).catch(() => {
        });
    };

    return (
        <Page>
            <PageBody uid="AuthPage" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className={classes.pageBodyInsideWrapper}>
                    <img className={classes.logo} src={logo} alt="" />
                    {
                        state === states.signUp && (
                            <AuthTextField
                                label={"Name"}
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        )
                    }
                    {
                        (state === states.signUp || state === states.signIn) && (
                            <>
                                <AuthTextField
                                    label={"Username"}
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                                <AuthTextField
                                    label={"Password"}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </>
                        )
                    }
                    {
                        state === states.signUp && (
                            <AuthTextField
                                label={"Repeat Password"}
                                value={repeatPassword}
                                onChange={e => setRepeatPassword(e.target.value)}
                            />
                        )
                    }
                    {
                        state === states.auth && (
                            <>
                                <div className={classes.PhotoZone}>PhotoZone</div>
                                <div className={classes.caption}>Share your photos easily...</div>
                            </>
                        )
                    }
                    {
                        state !== states.signIn && (
                            <AuthButton
                                filled={state !== states.auth}
                                text="SIGN UP"
                                style={{marginTop: state === states.auth ? 150 : 0}}
                                onClick={submitFormHandler.bind(this, states.signUp)}
                            />
                        )
                    }
                    {
                        state !== states.signUp && (
                            <AuthButton
                                filled
                                text="SIGN IN"
                                onClick={submitFormHandler.bind(this, states.signIn)}
                            />
                        )
                    }
                    {
                        state === states.signUp ? (
                            <div className={classes.question}
                                 onClick={handleAuthTypeChange.bind(this, states.signIn)}>Already have an account
                                ?</div>
                        ) : state === states.signIn && (
                            <div className={classes.question}
                                 onClick={handleAuthTypeChange.bind(this, states.signUp)}>You don't have account ?</div>
                        )
                    }
                    <br/>
                    <br/>
                </div>
            </PageBody>
        </Page>
    );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    setUsername: (val) => dispatch({type: "setUsername", value: val})
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthPage));

AuthPage.propTypes = {
    componentDidMount: PropTypes.func
};
AuthPage.defaultProps = {};
