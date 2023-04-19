import ImgCard from './components/Page72/ImgCard';
import Page70 from './components/Page70/Page70';
import img1 from "./Assets/img1.jpg";
import Page73 from './components/Page73/Page73';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page72 from './components/Page72/Page72';

// import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page70 />
  },
  {
    path: "/page71",
    element: <Page70 />
  },
  {
    path: "/page72",
    element: <Page72 />
  },
  {
    path: "/page73",
    element: <Page73 />
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
