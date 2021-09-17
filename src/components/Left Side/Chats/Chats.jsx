import React, { useContext } from 'react'
import s from './Chat.module.css'
import UserChat from './userChat/UserChat'

import Context from '../../../Context';

export default function Chats() {
    let { data } = useContext(Context)

    console.log(data)
    return (
        <div className={s.main}>
            <h2>Chats</h2>
            <div className={s.chats__container}>
                {data.users.map((item, index) => <UserChat
                    key={index}
                    index={index}
                    imgSrc={item.img}
                    name={item.name}
                    messages={item.messages}
                />)}
            </div>
        </div>
    )
}
