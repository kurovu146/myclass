import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DefaultLayout from './layouts/DefaultLayout';
import Select from './pages/Select';
import HomeLayout from './layouts/HomeLayout';
import Member from "./pages/Member";
import MemberDetail from "./pages/MemberDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeLayout content={<Home />} />} />
      <Route path="login" element={<DefaultLayout content={<Login />} />} />
      <Route path="register" element={<DefaultLayout content={<Register />} />} />
      <Route path="select" element={<DefaultLayout content={<Select />} />} />
      <Route path="members" element={<HomeLayout content={<Member />} />} />
      <Route path="memberdetail" element={<DefaultLayout content={<MemberDetail />} />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
