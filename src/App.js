import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom'
import AuthContextProvider from './Contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <NavBar />
        <ScrollToTop>
          <section className='md:min-h-screen'>
            <Outlet />
          </section>
        </ScrollToTop>
        <Footer />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
