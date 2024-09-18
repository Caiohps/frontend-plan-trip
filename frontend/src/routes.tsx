import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
  } from 'react-router-dom';

import { ROUTES_PATH } from './constants/routesPath';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import PlanTripPage from './pages/PlanTripPage/PlanTripPage';
import PlannedTripsPage from './pages/PlannedTripsPage/PlannedTripsPage';

const Template: React.FC = () => {
    return <div>
        <Layout
            header={
            <Header>
                <Menu />
            </Header>
            }
        >
            <Outlet />
        </Layout>
    </div>;
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={ROUTES_PATH.HOME} element={<Template />}>
                <Route
                    path={`${ROUTES_PATH.PLAN_PAGE}`}
                    element={<PlanTripPage/>}
                />
                <Route
                    path={`${ROUTES_PATH.PLANNED_PAGE}`}
                    element={<PlannedTripsPage />}
                />
            </Route>
        </Route>,
    )
);

function Routes() {
    return <RouterProvider router={router} />;
}

export default Routes;