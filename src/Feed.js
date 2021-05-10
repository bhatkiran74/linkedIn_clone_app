import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOptions from './InputOptions';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase'
import firebase from 'firebase'

const Feed = () => {

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])



    useEffect(() => {

        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        )

    })

    const sendPost = (e) => {
        e.preventDefault();



        db.collection("posts").add({
            name: "kiran bhat",
            description: "this is test",
            message: input,
            photourl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })


        setInput("")

    }



    return (
        <div className="feed">
            <div className="feed_input_container">
                <div className="feed_input">
                    <CreateIcon />
                    <form >
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Share The Post" />
                        <button onClick={sendPost} type="submit">send</button>
                    </form>
                </div>
                <div className="feed_input_options">
                    <InputOptions Icon={ImageIcon} Title="Photo" Color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} Title="Video" Color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} Title="Event" Color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} Title="Write article" Color="#7FC15E" />
                </div>
            </div>



            {/* post */}

            {posts.map(({ id, data: { name, description, message, photourl } }) =>
            (<Post

                key={id}
                name={name}
                description={description}
                message={message}
                photourl={photourl}

            />))}

            {/* <Post name="bhat kiran" description="we are student" message="hello we are enjoing here" /> */}
        </div>
    )
}

export default Feed
