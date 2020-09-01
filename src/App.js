import React from 'react'
import Search from './components/Search'
import Logic from './components/Logic'
import User from './components/User'
import Modal from './components/Modal'
import { v4 as uuidv4 } from 'uuid'

import './index.css'

function App() {
  const [searchText,setSearchText] = React.useState('')
  const [usersList, setUsersList] = React.useState([
    { id: 0, name: 'Bob Ross', age: 55, email: 'example@gmail.com'}
  ])

  const firstID = uuidv4()
  const [userInfo, setUserInfo] = React.useState({id: firstID, name: '', age: '', email: ''})


  const onTextChange = (e) => {
    setSearchText(e.target.value)
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
    showModal()
  }

  //modal toggle
  const [modalVisibility, setModalVisibility] = React.useState(false)
  const showModal = () => {
    setModalVisibility(true)
  }
  const closeModal = () => {
    setModalVisibility(false)
  }

  const modalRef = React.useRef()
  
  //layout control
 const [grid, setGrid] = React.useState('userListRow')
 const handleGridLayout = () => {
   setGrid('userListGrid')
 }
 const handleRowLayout = () => {
   setGrid('userListRow')
 }


  return (
    <div className={`App ${modalVisibility ? 'shadow' : ''}`}>
      <div className="overlay">
        <div className="wrapper">
          <header>
            <Search text={searchText} onTextChange={onTextChange}/>
            <Logic showModal={showModal} handleGridLayout={handleGridLayout}
            handleRowLayout={handleRowLayout}/>
          </header>
          <main className="container">
            <ul className={grid}>
              {
                usersList.map((item, index) => <User searchText={searchText} key={`${index}_${item.email}`} index={index} user={item} handleDelete={handleDelete} handleEdit={handleEdit} />)
              }
            </ul>
          </main>
          
        </div>
      </div>
      {modalVisibility && <Modal ref={modalRef} userInfo={userInfo} setUserInfo={setUserInfo} setUsersList={setUsersList} usersList={usersList} closeModal={closeModal}/>}
    </div>
  );
}

export default App
