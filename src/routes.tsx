import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import RootLayout from './RootLayout'
import { HistoryPage } from './pages/HistoryPage'
import { getDDMMDate } from './utils'



export const router = createBrowserRouter([
	{ path: '/', element: <RootLayout />, children: [
		{ path: '/', element: <MainPage /> },
		{ path: '/profile', element: <MainPage /> },
		{ path: '/settings', element: <MainPage /> },
		{ path: '/history', element: <Navigate to={'/history/' + getDDMMDate(new Date())}/> },
		{ path: '/history/:time', element: <HistoryPage /> },
	] },

])