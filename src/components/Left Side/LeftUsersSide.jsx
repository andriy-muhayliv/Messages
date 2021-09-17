import React from 'react'
import Chats from './Chats/Chats'
import Header from './Heder/Header'

export default function LeftUsersSide() {
    return (
        <div style={{ width: '33%', border: '1px solid #DBDBDB', height: '100%', }}>
            <Header />
            <Chats />
        </div>
    )
}
