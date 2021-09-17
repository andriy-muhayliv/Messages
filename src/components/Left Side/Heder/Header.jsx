import React, { useContext } from 'react'
import s from './Header.module.css'
import logo from '../../../Images/Search icon/698956.png'
import Context from '../../../Context'

export default function Header() {
    let { data, setData } = useContext(Context)
    const sortSearch = (e) => {
        let value = e.target.value.trim();
        let newData = Object.assign([], data);
        newData.users.forEach((item, index) => {
            if (item.name.toLowerCase().search(value.toLowerCase()) === -1) {
                newData.users[index].hide = true;
            } else {
                newData.users[index].hide = false;
            }
        })
        newData.searchInput = value;
        setData(newData)
    }

    return (
        <div className={s.main}>
            <div className={s.footer}>
                <img className={s.img} src={logo} />
                <input placeholder='Search or start new chat' onChange={sortSearch} />
            </div>
        </div>
    )
}
