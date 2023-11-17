import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import ExcerciseDetails from './pages/ExcerciseDetails';
import Layout from './Layout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/excercise/:id' element={<ExcerciseDetails />} />
      </Route>
    )
  )
  return (
    <>
      <Box width="400" sx={{ width: { xl: '1488px' } }} m='auto'>
        <RouterProvider router={router} />
      </Box>
    </>
  )
}

export default App
