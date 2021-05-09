import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOption.css'


const HeaderOption = ({ avatar, Icon, title }) => {
    return (
        <div className="header_option">
            {Icon && <Icon className="Header_option_icon" />}
            {avatar && <Avatar src={avatar} className="Header_option_icon" />}
            <h3 className="Header_option_title">{title}</h3>

        </div>
    )
}

export default HeaderOption
