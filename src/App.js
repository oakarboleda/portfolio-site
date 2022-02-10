import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import HomePage from './pages/HomePage/HomePage';
import Nav from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Box textAlign="center">
        <Grid minH="100vh" p={12}>
          <HomePage/>
        </Grid>
      </Box>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
