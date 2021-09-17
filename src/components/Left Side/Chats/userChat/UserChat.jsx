import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../../../Context';
import s from './UserChat.module.css'

export default function UserChat(props) {

    let { data } = useContext(Context)
    let hide;
    if (data.users[props.index].hide) {
        hide = s.hide;
    }
    return (
        <Link to={props.index.toString()}>
            <div className={[s.main + ' ' + hide]}>
                <div className={s.content}>
                    <img className={s.img} src={props.imgSrc} />

                    <div className={s.content__text}>
                        <p>{props.name}</p>
                        <p style={{ color: '#a3a3a3' }}>{props.messages[0].message}</p>
                    </div>
                </div>
                <div className={s.date}>
                    <p>last message</p>
                </div>
            </div>
        </Link>
    )
}
