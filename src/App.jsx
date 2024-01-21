import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import ArticlesPage from './pages/Article'
import AdminAuth from './pages/Admin/Auth/LoginPage'
import AdminPage from './pages/Admin'
import EventPage from './pages/Event'
import GroupPage from './pages/Group'
import ParrocoPage from './pages/Parroco'
import DonationPage from './pages/Donation'
import DonationAuth from './pages/Donation/Auth'
import EventDetails from './components/EventDetails'
import ParrocoDetails from './components/ParrocoDetails'
import PostDetails from './components/PostDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/event' element={<EventPage/>} />
        <Route path='/article' element={<ArticlesPage/>} />
        <Route path='/group' element={<GroupPage/>} />
        <Route path='/parroco' element={<ParrocoPage/>} />
        <Route path='/donation' element={<DonationPage />} />
        <Route path='/donation/auth' element={<DonationAuth />} />
        <Route path='/admin/auth' element={<AdminAuth />} />
        <Route path='/admin/*' element={<AdminPage />} />
        <Route path='/event/:id' element={<EventDetails />} />
        <Route path='/post/:id' element={<PostDetails />} />
        <Route path='/parroco/:id' element={<ParrocoDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
