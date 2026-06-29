import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import Overview from "./DashboardLayout/Overview";
import Analytics from "./DashboardLayout/Analytics";
import Users from "./DashboardLayout/Users";
import Reports from "./DashboardLayout/Reports";
import Settings from "./DashboardLayout/Settings";
import Help from "./DashboardLayout/Help";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="users" element={<Users />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="helps" element={<Help />} />
      </Route>,
    ),
  );

  return (
    // <DashboardLayout />
    <RouterProvider router={router} />
  );
}

export default App;
