// src/App.tsx
import FancyAppBar from './components/FancyAppBar';
import NaviBar from './components/NaviBar';
import { useState } from 'react';
import { Box } from '@mui/material';

function App() {
  const [iframeSrc, setIframeSrc] = useState('/api/godash/dash1/');

  return (
    <>
      <FancyAppBar />
      <Box display="flex">
        <NaviBar onSelect={setIframeSrc} />
        <iframe src={iframeSrc} title="Dashboard" style={{ flex: 1, border: 'none',  height: '90vh' }} />
      </Box>
    </>
  );
}

export default App;
