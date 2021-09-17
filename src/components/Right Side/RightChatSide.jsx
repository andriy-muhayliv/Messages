import React, { useContext, useState } from 'react'
import s from './RightChat.Side.module.css'
import sendIcon from '../../Images/Send icon/send.png'
import Context from '../../Context';

export default function RightChatSide(props) {
    let { data, setData } = useContext(Context);
    let [messageValue, setMessageValue] = useState('');
    let messages = props.messages.map((item, index) => {
        if (!item.isOwner) {
            return (
                <div className={s.messageItem}>
                    <img src={props.imgSrc} />
                    <div className={s.message}>
                        <p>{item.message}</p>
                        <p className={s.time}>Time</p>
                    </div>
                </div>

            )
        } else {
            return (
                <div className={s.messageItem, s.owner} style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <div className={s.message} style={{ backgroundColor: '#E0E0E0' }}>
                        <p style={{ color: 'black' }}>{item.message}</p>
                        <p className={s.time} style={{ right: '10px' }}>Time</p>
                    </div>
                </div>

            )
        }
    })

    const sendMessage = () => {
        if (messageValue.trim().length > 0) {
            let newData = Object.assign({}, data);
            newData.users[props.index].messages.push({ message: messageValue, isOwner: true });
            setData(newData)
            setMessageValue('')
            addJoke()
        }
    }
    let addJoke = () => {
        setTimeout(() => {
            let newData = Object.assign({}, data);
            fetch('https://api.chucknorris.io/jokes/random')
                .then(responce => responce.json())
                .then(json => {
                    newData.users[props.index].messages.push({ message: json.value, isOwner: false })
                })
                .then(() => setData(newData))

        }, 1000);
    }
    return (
        <div className={s.main}>
            <div className={s.header}>
                <img src={props.imgSrc} />
                <p>{props.name}</p>
            </div>
            <div className={s.content}>
                {messages}
            </div>

            <div className={s.bottom}>
                <input onChange={(e) => setMessageValue(e.target.value)} value={messageValue} />
                <img src={sendIcon} onClick={sendMessage} />
            </div>
        </div>
    )
}
// Vitalii Nobis16:42
// https://css-tricks.com/snippets/css/complete-guide-grid/
// Vitalii Nobis16:43
// git feature branches