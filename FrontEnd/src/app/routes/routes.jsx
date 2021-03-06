import AuthGuard from 'app/auth/AuthGuard'
import NotFound from 'app/views/sessions/NotFound'
import chartsRoute from 'app/views/charts/ChartsRoute'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes'
import pageRoutes from 'app/views/pages/PageRoutes'
import roomRoutes from 'app/views/Room/RoomRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <AuthGuard>
                    <MatxLayout />
                </AuthGuard>
            ),
            children: [
                ...dashboardRoutes, 
                ...chartsRoute, 
                ...materialRoutes,
                ...pageRoutes,
                ...roomRoutes
            ],
        },
        ...sessionRoutes,
        // {
        //     path: '/',
        //     element: <Navigate to="/home" />,
        // },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
