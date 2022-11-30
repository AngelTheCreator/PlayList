import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Bar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import Home from './components/home';
import Catalogue from './components/Catalogue/Catalogue';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Catalogue />,
  },
]);

export default function App(){
  return (
      <div className='App'>
        <Bar/>
        <div className="App App-header">
          <h1>PlayList for Chads</h1>
          <main>
            <RouterProvider router={router} />
          </main>
        </div>
      </div>
  );
}
