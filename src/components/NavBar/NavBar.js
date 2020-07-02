import React, {useState, useEffect} from 'react';
import * as PropTypes from 'prop-types';
import classes from './NavBar.module.scss';
import HomeSvgIcon from "../HomeSvgIcon/HomeSvgIcon";
import ChatsSvgIcon from "../ChatsSvgIcon/ChatsSvgIcon";
import ProfileSvgIcon from "../ProfileSvgIcon/ProfileSvgIcon";
import SearchSvgIcon from "../SearchSvgIcon/SearchSvgIcon";
import NewPostSvgIcon from "../NewPostSvgIcon/NewPostSvgIcon";
import { withRouter } from "react-router";

const NavBar = props => {
    const handleChange = tab => {
        props.onChangeTab(tab);
    };
    const handlePageChange = (url) => {
        props.history.replace(url);
    };
    useEffect(() => {
        // props.history.push('/posts');
    }, []);
    return (
        <div className={classes.NavBar}>
            <HomeSvgIcon
                active={props.activeTab === "HomeSvgIcon"}
                onClick={handleChange.bind(this, "HomeSvgIcon")}
                color="#999"
                activeColor="#333"
            />
            <SearchSvgIcon
                active={props.activeTab === "SearchSvgIcon"}
                onClick={handleChange.bind(this, "SearchSvgIcon")}
                color="#999"
                activeColor="#333"
            />
            <NewPostSvgIcon
                active={props.activeTab === "NewPostSvgIcon"}
                onClick={handleChange.bind(this, "NewPostSvgIcon")}
                color="#999"
                activeColor="#333"
            />
            <ChatsSvgIcon
                active={props.activeTab === "ChatsSvgIcon"}
                onClick={handleChange.bind(this, "ChatsSvgIcon")}
                color="#999"
                activeColor="#333"
            />
            <ProfileSvgIcon
                active={props.activeTab === "ProfileSvgIcon"}
                onClick={handleChange.bind(this, "ProfileSvgIcon")}
                color="#999"
                activeColor="#333"
            />
        </div>
    );
};

export default withRouter(NavBar);

NavBar.propTypes = {
    activeTab: PropTypes.string,
    onChangeTab: PropTypes.func.isRequired
};

NavBar.defaultProps = {
    activeTab: "HomeSvgIcon"
};
