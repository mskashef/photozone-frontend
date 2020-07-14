import React, {useState} from 'react';
import send from '../../assets/WriteMessage/send.svg';
import * as PropTypes from 'prop-types';
import classes from './WriteMessage.module.scss'

const WriteMessage = props => {
    return (
        <div className={classes.writeMessage}>
            <textarea
                placeholder={'Enter your message...'}
                className={classes.textarea}
                style={{color: '#000000', fontFamily: 'Arial'}}
                value={props.value}
                onChange={e => props.onChangeText(e.target.value)}
            />
            <img alt="Send" className={classes.sendMessageButton} src={send} onClick={() => {props.onTextMessageSubmit(props.value)}} />
        </div>
    )
};

export default WriteMessage;

WriteMessage.propTypes = {
    onTextMessageSubmit: PropTypes.func
};
