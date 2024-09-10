import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import { UserData } from "./context/User";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const PlayList = lazy(() => import("./pages/PlayList"));
const Admin = lazy(() => import("./pages/Admin "));
const Album = lazy(() => import("./pages/Album"));

export default function AllRoutes() {
  const { isAuth, user } = UserData();
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex justify-center items-center">
          <Loading />
        </div>
      }
    >
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/playlist"
          element={
            isAuth ? (
              <Layout>
                <PlayList user={user} />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/album/:id"
          element={
            isAuth ? (
              <Layout>
                <Album user={user} />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route path="/admin" element={isAuth ? <Admin /> : <Login />} />
        <Route path="/login" element={isAuth ? <Home /> : <Login />} />
        <Route path="/register" element={isAuth ? <Home /> : <Register />} />
      </Routes>
    </Suspense>
  );
}
