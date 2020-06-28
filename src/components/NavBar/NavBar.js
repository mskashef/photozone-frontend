import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import classes from './NavBar.module.scss';
import HomeSvgIcon from "../HomeSvgIcon/HomeSvgIcon";
import ChatsSvgIcon from "../ChatsSvgIcon/ChatsSvgIcon";
import ProfileSvgIcon from "../ProfileSvgIcon/ProfileSvgIcon";
import SearchSvgIcon from "../SearchSvgIcon/SearchSvgIcon";
import NewPostSvgIcon from "../NewPostSvgIcon/NewPostSvgIcon";

const NavBar = props => {
    const [active, setActive] = useState("HomeSvgIcon");
    const handleChange = tab => {
        setActive(tab);
        props.onChangeTab(tab)
    };
    return (
        <div className={classes.NavBar}>
            <HomeSvgIcon
                active={active === "HomeSvgIcon"}
                onClick={handleChange.bind(this, "HomeSvgIcon")}
                color="#999"
                activeColor="#333"
            />
            <SearchSvgIcon
                active={active === "SearchSvgIcon"}
                onClick={handleChange.bind(this, "SearchSvgIcon")}
                color="#999"
                activeColor="#333"
            />
            <NewPostSvgIcon
                active={active === "NewPostSvgIcon"}
                onClick={handleChange.bind(this, "NewPostSvgIcon")}
                color="#999"
                activeColor="#333"
            />
            <ChatsSvgIcon
                active={active === "ChatsSvgIcon"}
                onClick={handleChange.bind(this, "ChatsSvgIcon")}
                color="#999"
                activeColor="#333"
            />
            <ProfileSvgIcon
                active={active === "ProfileSvgIcon"}
                onClick={handleChange.bind(this, "ProfileSvgIcon")}
                color="#999"
                activeColor="#333"
            />
        </div>
    );
};

export default NavBar;

NavBar.propTypes = {
    activeTab: PropTypes.string,
    onChangeTab: PropTypes.func.isRequired
};

NavBar.defaultProps = {
    activeTab: "HomeSvgIcon"
};
