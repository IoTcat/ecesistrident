import * as React from 'react';
import { AppBar, TitlePortal, Title } from 'react-admin';
import { Box, useMediaQuery, Theme } from '@mui/material';

import Logo from './Logo';

const CustomAppBar = () => {
    const isLargeEnough = useMediaQuery<Theme>(theme =>
        theme.breakpoints.up('sm')
    );
    return (
        <AppBar color="secondary" elevation={1}>
            <Box flex="1%" />
            <Logo />
            {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
        </AppBar>
    );
};

export default CustomAppBar;