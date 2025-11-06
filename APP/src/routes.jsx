
import Dashboard from '../src/Pages/Dashboard/Dashboard'
import Projects from '../src/Pages/Projects/Projects'
import Calendar from './Pages/Calendar/Calendar'
import Vacations from './Pages/Vacations/Vacations'
import Employes from './Pages/Employees/Employees'
import Messenger from './Pages/Messenger/Messanger'
import InfoPortal from './Pages/InfoPortal/InfoPortal'
import MainPage from './mainPage'

const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/projects', element: <Projects /> },
    { path: '/calendar', element: <Calendar /> },
    { path: '/vacations', element: <Vacations /> },
    { path: '/employes', element: <Employes /> },
    { path: '/messenger', element: <Messenger /> },
    { path: '/infoPortal', element: <InfoPortal /> },

    { path: '/mainPage', element: <MainPage /> },

]

export default routes