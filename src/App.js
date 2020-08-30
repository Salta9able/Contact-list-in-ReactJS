import React from 'react'
import Search from './components/Search'
import Logic from './components/Logic'
import User from './components/User'
import Modal from './components/Modal'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [text,setText] = React.useState('')
  const [usersList, setUsersList] = React.useState([
    { id: 0, name: 'Galieva Saltanat', age: 29, email: 'galievasaltanat@gmail.com'}
  ])

  const firstID = uuidv4()
  const [userInfo, setUserInfo] = React.useState({id: firstID, name: '', age: '', email: ''})


  const onTextChange = (e) => {
    setText(e.target.value)
  }

  const handleDelete = (id) => {
    const newList = usersList.filter(user => user.id !== id)
    setUsersList(newList)
  }

  const handleEdit = (id) => {
    const newList = usersList.filter(user => user.id !== id)
    const userItem = usersList.find(user => user.id === id);
    setUsersList(newList)
    setUserInfo(userItem)
  }

  //modal toggle
  const [modalVisibility, setModalVisibility] = React.useState(false)
  const showModal = () => {
    setModalVisibility(true)
  }
  const closeModal = () => {
    setModalVisibility(false)
  }

  const modalRef = React.useRef();
  
  return (
    <div className="App">
      <header>
        <Search text={text} onTextChange={onTextChange}/>
        <Logic showModal={showModal}/>
      </header>
      <main className="container">
        <ul className='userList'>
          {
            usersList.map((item, index) => <User key={`${index}_${item.email}`} index={index} user={item} handleDelete={handleDelete} handleEdit={handleEdit} />)
          }
        </ul>
      </main>
      {modalVisibility && <Modal ref={modalRef} userInfo={userInfo} setUserInfo={setUserInfo} setUsersList={setUsersList} usersList={usersList} closeModal={closeModal}/>}
      
    </div>
  );
}

export default App
