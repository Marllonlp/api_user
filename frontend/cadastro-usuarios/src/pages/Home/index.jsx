import { useEffect, useState, useRef } from 'react'
import './style.css'
import Lixeira from '../../assets/lixeira.svg'
import api from '../../services/api'

// react hook - useRef 

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function createUsers() {
    
    await api.post('/api/user/', {
      user_name: inputName.current.value,
      user_age: inputAge.current.value,
      user_email: inputEmail.current.value,
    })

  }

  async function getUsers() {
    const usersFromApi = await api.get('/api/users/')

    setUsers(usersFromApi.data)
  }

  async function deleteUsers(user_nickname) {
    await api.delete(`/api/user/${user_nickname}/delete/`)
    await getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input name="nome" type="text" ref={inputName} />
        <input name="idade" type="number" ref={inputAge} />
        <input name="email" type="email" ref={inputEmail} />
        <button name="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.user_nickname}>
          <div>
            <p>Nome:{user.user_name}</p>
            <p>Idade:{user.user_age}</p>
            <p>E-mail:{user.user_email}</p>
          </div>
          <button onClick={() => deleteUsers(user.user_nickname)}>
            <img src={Lixeira} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
