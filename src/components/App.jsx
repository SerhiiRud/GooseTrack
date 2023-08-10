import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import NotFound from 'pages/NotFound';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

const MainPage = lazy(() => import('../pages/MainPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const MainLayout = lazy(() => import('../pages/MainLayout'));
const AccountPage = lazy(() => import('../pages/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const ChoosedMonth = lazy(() => import('../pages/ChoosedMonth'));
const ChoosedDay = lazy(() => import('../pages/ChoosedDay'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading, please, wait...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={isLoggedIn ? <MainLayout /> : <MainPage />}>
          <Route
            path="account"
            element={
              <PrivateRoute redirectTo="/" component={<AccountPage />} />
            }
          />
          <Route
            path="calendar/*"
            element={
              <PrivateRoute redirectTo="/" component={<CalendarPage />} />
            }
          >
            <Route
              path="month/:currentDate"
              element={
                <PrivateRoute redirectTo="/" component={<ChoosedMonth />} />
              }
            />
            <Route
              path="day/:currentDate"
              element={
                <PrivateRoute redirectTo="/" component={<ChoosedDay />} />
              }
            />
          </Route>
          <Route
            path="statistics"
            element={
              <PrivateRoute redirectTo="/" component={<StatisticsPage />} />
            }
          />
        </Route>
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
