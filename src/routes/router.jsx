import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import Installation from '../pages/Installation/Installation';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'apps', element: <AllApps /> },
      { path: 'apps/:id', element: <AppDetails /> },
      { path: 'installation', element: <Installation /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
