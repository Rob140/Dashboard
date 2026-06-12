import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import DashboardLayout from "./DashboardLayout/DashboardLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route Path="/" element={<DashboardLayout />}>
        <Route />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
