import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({ name, description, message, posturl }) => {

    const [posts, setPosts] = useState([])



    return (
        <div className="post">

            <div className="post_header">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_mLrKMiY7_gZRCvXD9vpwlglcxzmZ4Q-SJMDEeFA=s83-c-mo" />

                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>


            <div className="post_buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} Title="Like" Color="gray" />
                <InputOptions Icon={ChatOutlinedIcon} Title="Comment" Color="gray" />
                <InputOptions Icon={ShareOutlinedIcon} Title="Share" Color="gray" />
                <InputOptions Icon={SendOutlinedIcon} Title="Send" Color="gray" />
            </div>

        </div>
    )
}

export default Post
