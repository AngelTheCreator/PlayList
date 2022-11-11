import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';


import Home from './components/home';
import DisplayProto from './components/Prototypes/displaydata';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <DisplayProto />,
  },
]);

export default function App(){
  return (
      <div className="App App-header">
        <h1>PlayList for Chads</h1>
        <main>
          <RouterProvider router={router} />
        </main>
      </div>
  );
}
