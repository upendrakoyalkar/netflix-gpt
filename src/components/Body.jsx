import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Browser from './Browser.jsx'
import Header from './Header.jsx'
import Login from './Login.jsx'

const Body = () => {
  const approuter = createBrowserRouter([
    {path: '/',
        element:<Login/>
        },
    {path: '/Header', 
    element: <Header/>},

    {path: '/browser',
    element: <Browser/>},

    


  ]);
  return(
    <div>
        <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body