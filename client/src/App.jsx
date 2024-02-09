import GlobalStyles from "../ui/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../ui/AuthLayout";
import Login from "../pages/Login";
import AppLayout from "../ui/AppLayout";
import EmployeesList from "../features/Employees/EmployeesList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUp from "../pages/SignUp";
import UserContextProvider from "../contexts/AuthContext";
import RequireAuth from "../features/auth/RequireAuth";
import PersistLogin from "../features/auth/PersistLogin";
import AuthDash from "../features/auth/AuthDash";
import AddEmployee from "../pages/AddEmployee";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<AuthDash />} />
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<SignUp />} />
            </Route>

            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="/" element={<AppLayout />}>
                  <Route path="employees" element={<EmployeesList />} />
                  <Route path="employees/add" element={<AddEmployee />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default App;
