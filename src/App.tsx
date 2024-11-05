import { Link ,Routes ,Route} from 'react-router-dom'
import Users from "./components/users"

import './App.css'
import UserCard from './components/UserCard'

function App() {

  return (
    <div>
      <nav>
   <Link to = "/users">users</Link>
      </nav>
      <h1> Lets Leran React Router Dom</h1>
      <Routes>
        <Route path="/users/:id" element={<UserCard/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </div>
  )
}

export default App

