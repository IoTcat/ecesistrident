import {
  List,
  //Datagrid,
  ListGuesser,
  //TextField,
} from "react-admin";

import { Chip } from '@mui/material';

import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';


export const PostFilterSidebar = () => (
  <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
          <SavedQueriesList />
          <FilterLiveSearch />
          <FilterList label="Tag" icon={<MailIcon />}>
              <FilterListItem label="ptp_dayzer_wind" value={{ tag: "ptp_dayzer_wind" }} />
              <FilterListItem label="wind_underschedule_dayzer" value={{ tag: "wind_underschedule_dayzer" }} />
          </FilterList>
      </CardContent>
  </Card>
);

export const DailyTrade = () => (
  <List aside={<PostFilterSidebar />}>
    <ListGuesser />
  </List>
);
