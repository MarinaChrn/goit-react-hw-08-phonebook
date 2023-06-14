import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { useAuth } from "./useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { HomePage } from "pages/HomePage";
import { RegisterPage } from "pages/RegisterPage";
import { LoginPage } from "pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { ContactsPage } from "pages/ContactsPage";
import { SharedLayout } from "./SharedLayout";
import { refreshUser } from "operations";

export const App = () => {
 
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}