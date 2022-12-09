import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Bar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import Home from './components/home';
import Err404 from './components/404Page';
import Catalogue from './components/Catalogue/Catalogue';
import ProfilePage from './components/Profile/profilePage';
import SearchCatalogue from './components/Catalogue/searchResults';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
  {
    path: "/*",
    element: <Err404/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
  { path: "/catalogue/search",
    element: <SearchCatalogue/>
  }
]);

export default function App(){
  return (
      <div className='App'>
        <Bar/>
        <div className="App App-header">
          <main>
            <RouterProvider router={router} />
          </main>
        </div>
      </div>
  );
}
