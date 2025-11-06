
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Topbar from './Components/Topbar/Topbar'

function App() {
  const router = useRoutes(routes)

  return (
    <div className='app' style={{ fontFamily: 'Vazir, sans-serif', direction: 'rtl' }} >
      <div className='app-container d-flex'>

        <div className='app-right'>
          <Sidebar/>
        </div>

        <div className='app-left'>
           <div className='app-left__topbar'>
             <Topbar/>
           </div>
           <div className='app-left__root'>
            {router}
           </div>
        </div>

      </div>
    </div>
  )
}

export default App
