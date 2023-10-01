// src/components/FancyAppBar.tsx
import { AppBar, Toolbar, Typography } from '@mui/material';

function FancyAppBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">ecesis</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default FancyAppBar;
