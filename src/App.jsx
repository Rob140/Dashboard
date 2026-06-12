// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
import DashboardLayout from "./DashboardLayout/DashboardLayout";

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<DashboardLayout />}>
  //       <Route index element={<Main />} />
  //     </Route>,
  //   ),
  // );

  return (
    <DashboardLayout />
    //  <RouterProvider router={router} />;
  );
}

export default App;
