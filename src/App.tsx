import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './page/home';
import Create from './page/create';
import ProjectCreation from './components/project_creation';
import Royality from './components/project_creation/royality'; 
import HolderComponent from './components/holder_component'; 
import RepOwned from './components/holderinfo_component/rep_owned'; 
import HolderInfo from './page/holder_info';
import RepRecieved from './components/holderinfo_component/rep_recieved';
import ProjectOwned from './components/holderinfo_component/project_owned';
import Project from './page/project';
import ProjectComponent from './components/project_component';
// import './App.css'

function App() {
  const router = createBrowserRouter(
    // I used the App as the home path to be changed when the homepage is created
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path='/gainer' element={<Home gainer={true} />} />
        <Route path='/create' element={<Create />} >
          <Route index element={<ProjectCreation />} />
          <Route path='royality' element={<Royality />} />
          {/* <Route path='preview' element={<Preview />} /> */}
        </Route> 
        <Route path='/holder' element={<Create />} >
          <Route index element={<HolderComponent />} /> 
        </Route>
        <Route path='/project' element={<Project />} >
          <Route index element={<ProjectComponent />} /> 
        </Route>
        <Route path='/profileinfo' element={<HolderInfo profile={true} />} >
          <Route index element={<RepOwned profile={true} />} /> 
          <Route path='received' element={<RepRecieved profile={true} />} />
          <Route path='owned' element={<ProjectOwned profile={true} />} />
        </Route>
        <Route path='/holderinfo' element={<HolderInfo />} >
          <Route index element={<RepOwned />} /> 
          <Route path='received' element={<RepRecieved />} />
          <Route path='owned' element={<ProjectOwned />} />
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
