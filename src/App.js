import './assets/scss/soft-ui-dashboard.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './routes/private-route';
import Login from './pages/auth/Login';
import { api } from './api/requestApi';
import { PageLoader } from './components/page-loader';

export const AuthContxt = createContext();

function App() {
  const [isAuthed, setAuth] = useState(true);
  const [isLoadin, setIsLoadin] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get();
      setIsLoadin(()=>false);
    }
    fetchData()
      .catch(console.error);
  }, []);
  if(isLoadin){
    return (
      <>
        <PageLoader />
      </>
    )
  }
  return (
    <>
      <BrowserRouter >
        <AuthContxt.Provider value={{ isAuthed, setAuth }} >
          <Routes>
            <Route
              path='/*'
              element={
                <PrivateRoute >
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path='/login'
              element={<Login />}
            />
          </Routes>
        </AuthContxt.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
