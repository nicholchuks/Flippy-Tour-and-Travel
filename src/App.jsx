import Footer from "./components/footer/Footer";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/service" element={<Service />} />
  //         <Route path="/contact" element={<Contact />} />
  //       </Route>
  //     </>
  //   )
  // );
  // return (
  //   <div>
  //     <RouterProvider router={router}></RouterProvider>
  //   </div>
  // );
};

export default App;
