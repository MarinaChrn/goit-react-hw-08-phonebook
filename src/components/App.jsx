import { fetchContacts } from "operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { FilterContacts } from "./filter/FilterContacts";
import { Route, Routes } from 'react-router-dom';
import { Layout } from "./GlobalStyles.styled";
import { useAuth } from "./useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { HomePage } from "pages/HomePage";
import { RegisterPage } from "pages/RegisterPage";
import { LoginPage } from "pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { ContactsPage } from "pages/ContactsPage";

export const App = () => {
 

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    // dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
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