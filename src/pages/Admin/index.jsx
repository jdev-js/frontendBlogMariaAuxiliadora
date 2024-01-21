import { Routes, Route } from 'react-router-dom'
import TopBar from './Navigation/TopBar'
import styles from './style.module.css'
import Navigation from './Navigation'
import HomeAdmin from './Home'
import PostAdmin from './Post'
import DonationAdmin from './Donation'
import EventAdmin from './Event'
import GroupAdmin from './Group'
import ParrocoAdmin from './Parroco'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function AdminPage() {
  const navigate = useNavigate()
  useEffect(() => {
   const admin = window.localStorage.getItem("admin")
   const adminJson = JSON.parse(admin)
   if(!adminJson) navigate("/adming/auth")
  })

  return (
    <div className={styles.containerAdminPanel}>
      <Navigation />
      <div className={styles.containerContent}>
        <TopBar />
        <Routes>
          <Route path="/home" element={<HomeAdmin />}/>
          <Route path="/post" element={<PostAdmin />}/>
          <Route path="/donation" element={<DonationAdmin />}/>
          <Route path="/event" element={<EventAdmin />}/>
          <Route path="/group" element={<GroupAdmin />}/>
          <Route path="/parroco" element={<ParrocoAdmin />}/>
        </Routes>
      </div>
    </div>
  )
}
