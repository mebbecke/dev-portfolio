import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme-context';
import Layout from './components/layout';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
