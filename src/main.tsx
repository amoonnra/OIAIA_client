import ReactDOM from 'react-dom/client'
import './index.scss'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import Menu from './components/Menu'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
      // <Provider store={store}>
      <>
        <RouterProvider router={router} ></RouterProvider>
        <div className="topBgHeader"/> 
       
      </>
        
      // </Provider>
    // </React.StrictMode>
  )
