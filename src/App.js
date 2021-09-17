import { useState } from 'react';
import './App.css';
import LeftUsersSide from './components/Left Side/LeftUsersSide';
import RightChatSide from './components/Right Side/RightChatSide';
import Context from './Context';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  let [data, setData] = useState({
    searchInput: '',
    users: [{
      id: 1,
      name: "Leanne Graham",
      img: 'https://img.joinfo.com/i/2018/04/5ad83d406a33d.jpg',
      messages: [
        { message: 'hello how are you', isOwner: false },
        { message: 'hello how are you', isOwner: false },
        { message: 'hello how are you', isOwner: false },
        { message: 'hello how are me', isOwner: true }
      ],
      hide: false,
      lastMessage: '',
      answer() {
        fetch('https://api.chucknorris.io/jokes/random')
          .then(responce => responce.json())
          .then(json => this.messages.push({ message: json.value, isOwner: false }))
      }

    }, {
      id: 2,
      name: "Albert Kronshtein",
      img: 'https://i.pinimg.com/originals/e9/1b/5a/e91b5a168ce22badd46238ac62ff34da.jpg',
      messages: [
        { message: 'hello how are you', isOwner: false }
      ],
      hide: false

    }, {
      id: 3,
      name: "Elon Maks",
      img: 'https://pobedarf.ru/wp-content/uploads/2020/07/ilon-mask.jpg',
      messages: [
        { message: 'hello how are you', isOwner: false }
      ],
      hide: false

    }, {
      id: 4,
      name: "Володимир Зеленський",
      img: 'https://cdn.fishki.net/upload/post/201406/06/1275504/40-of-the-most-amazing-humans-met-on-the-streets-by-the-humans-of-movement-worldwide34__700.jpg',
      messages: [
        { message: 'hello how are you', isOwner: false }
      ],
      hide: false

    }, {
      id: 5,
      name: "Put In",
      img: 'https://101zabava.club/wp-content/uploads/2019/02/3-204.jpg',
      messages: [
        { message: 'Krip nash!!!', isOwner: false }
      ],
      hide: false

    }, {
      id: 6,
      name: "Evolution Man",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0OctCPUk0Lxk0ZaPCxv2eiIfRk6fxQxg6P4OdJsaLOqI_CzOSs5sR_RyXQncFj-yf94&usqp=CAU',
      messages: [
        { message: 'hello how are you', isOwner: false }
      ],
      hide: false

    }, {
      id: 7,
      name: "Нина Матвиенко",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk8gEg90nhuS4Sk3HzVZD_EWMsXz3eReXsA&usqp=CAU',
      messages: [
        { message: 'hello how are you', isOwner: false }
      ],
      hide: false

    },]
  });
  let data1 = {
    getUsers: [JSON.parse(localStorage.getItem('data'))]
  }
  return (
    <Context.Provider value={{ data, setData }}>
      <Router>
        <div className="App">
          <LeftUsersSide />

          {/* <Route exact path='/'>
            <RightChatSide />
          </Route> */}
          {data.users.map((item, index) => {
            return (
              <Route path={`/${index}`} >
                <RightChatSide index={index} imgSrc={item.img} name={item.name} messages={item.messages} />
              </Route>
            )
          })}
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
