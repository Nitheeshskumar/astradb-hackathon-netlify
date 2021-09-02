import React from 'react'
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../Utils/ErrorBoundary';
import RouteGuard from './RouteGuard'
import ContextStore from '../ContextStore/ContextStore'
import MainWrapper from '../Modules/MainWrapper';
const Login = React.lazy(()=>import('../Modules/Login'))
const Dashboard = React.lazy(()=>import('../Modules/Dashboard/Dashboard'))
const Admin = React.lazy(()=>import('../Modules/Admin/Admin'))

const RootRoutes = () => (
    <BrowserRouter>
      <ContextStore>
        <ErrorBoundary>
          <MainWrapper>
            <React.Suspense
              fallback={
                <>
                  <div className="linear-activity">
                    <div className="indeterminate"></div>
                  </div>
                  <div className="loader_wrap loader"></div>
                </>
              }
            >
              <Switch>
                <RouteGuard path="/login" xComponent={Login} />
                <RouteGuard path="/dashboard" xComponent={Dashboard} />
                <RouteGuard path="/admin" xComponent={Admin} />
                <Redirect from="*" to="/login" push />
                </Switch>
          </React.Suspense>
        </MainWrapper>
      </ErrorBoundary>
    </ContextStore>
  </BrowserRouter>
);

export default RootRoutes;