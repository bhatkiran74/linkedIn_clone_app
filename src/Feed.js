import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOptions from './InputOptions';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed_input_container">
                <div className="feed_input">
                    <CreateIcon />
                    <form >
                        <input type="text" placeholder="Share The Post" />
                        <button type="submit">send</button>
                    </form>
                </div>
                <div className="feed_input_options">
                    <InputOptions Icon={ImageIcon} Title="Photo" Color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} Title="Video" Color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} Title="Event" Color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} Title="Write article" Color="#7FC15E" />
                </div>

            </div>
        </div>
    )
}

export default Feed
