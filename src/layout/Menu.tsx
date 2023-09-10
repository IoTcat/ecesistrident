import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';

import ShowChartIcon from '@mui/icons-material/ShowChart';

import {
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import reports from '../reports';
import SubMenu from './SubMenu';

type MenuName = 'VIRTUAL' | 'FTR';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        VIRTUAL: false,
        FTR: false,
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
                handleToggle={() => handleToggle('VIRTUAL')}
                isOpen={state.VIRTUAL}
                name="VIRTUAL"
                icon={<reports.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/report/daily-trade"
                    state={{ _scrollToTop: true }}
                    primaryText="Daily Trade Report"
                    //leftIcon={<reports.icon />}
                    dense={dense}
                    style={{ fontSize: 13 }}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('FTR')}
                isOpen={state.FTR}
                name="FTR"
                icon={<ShowChartIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/report/daily-trade"
                    state={{ _scrollToTop: true }}
                    primaryText="Monthly Performance Report"
                    //leftIcon={<reports.icon />}
                    dense={dense}
                    style={{ fontSize: 13 }}
                />
            </SubMenu>
        </Box>
    );
};


export default Menu;