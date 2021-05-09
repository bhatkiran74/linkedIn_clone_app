import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {


    const recentItem = (topic) => (
        <div className="sidebar_recent_item">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className="sidebar">

            <div className="sidebar_top">
                <img src="https://static-cse.canva.com/blob/125311/texture.0ebe2292.jpg" alt="" />
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_mLrKMiY7_gZRCvXD9vpwlglcxzmZ4Q-SJMDEeFA=s83-c-mo" className="sidebar_avatar" />
                <h2>Kiran bhat</h2>
                <h4>Bhatkiran74@gmail.com</h4>
            </div>


            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>who view</p>
                    <p className="sidebar_stat_number">454</p>
                </div>

                <div className="sidebar_stat">
                    <p>who view</p>
                    <p className="sidebar_stat_number">454</p>
                </div>
            </div>


            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('hello')}
                {recentItem('brudos')}
                {recentItem('hello')}
                {recentItem('hello')}
                {recentItem('hello')}
                {recentItem('hello')}


            </div>



        </div>
    )
}

export default Sidebar
