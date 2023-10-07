// src/components/NaviBar.tsx
import { List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

interface NaviBarProps {
  onSelect: (url: string) => void;
}

function NaviBar({ onSelect }: NaviBarProps) {
  const [selected, setSelected] = useState('dash1');

  return (
    <List>
      <ListItem
        button
        selected={selected === 'dash1'}
        onClick={() => { setSelected('dash1'); onSelect('/api/godash/dash1/'); }}>
        <ListItemText primary="Dash 1" />
      </ListItem>
      <ListItem
        button
        selected={selected === 'dash2'}
        onClick={() => { setSelected('dash2'); onSelect('/api/godash/dash2/'); }}>
        <ListItemText primary="Dash 2" />
      </ListItem>
    </List>
  );
}

export default NaviBar;
