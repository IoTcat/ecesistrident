import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';

import {
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import reports from '../reports';
import SubMenu from './SubMenu';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    });
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            {/* <DashboardMenuItem /> */}
            <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                name="Reports"
                icon={<reports.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/report/daily-trade"
                    state={{ _scrollToTop: true }}
                    primaryText="Daily Trade"
                    leftIcon={<reports.icon />}
                    dense={dense}
                />
            </SubMenu>
        </Box>
    );
};

export default Menu;