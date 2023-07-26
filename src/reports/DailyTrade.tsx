import {
  Datagrid,
  List,
  ListGuesser,
  TextField,
  DatagridConfigurable,
  SelectColumnsButton,
  FilterButton,
  CreateButton,
  ExportButton,
  TopToolbar,
  DateField,
  NumberField
} from "react-admin";

import { Chip, Divider } from '@mui/material';

import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem, Filter, DateInput, TextInput } from 'react-admin';
import { Card, CardContent } from '@mui/material';

import FilterAltIcon from '@mui/icons-material/FilterAlt';

export const PostFilterSidebar = () => (
  <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
          <Filter>
            <DateInput placeholder="Date" source="date" alwaysOn/>
          </Filter>
          <FilterList label="Tag" icon={<FilterAltIcon />} >
              <FilterListItem label="ALL" value={{ tag: "ALL" }} />
              <FilterListItem label="ERCOT" value={{ tag: "ERCOT" }} />
              <FilterListItem label="MISO" value={{ tag: "MISO" }} />
              <FilterListItem label="PJM" value={{ tag: "PJM" }} />
              <FilterListItem label="SPP" value={{ tag: "SPP" }} />
              <FilterListItem label="CAISO" value={{ tag: "CAISO" }} />
              <FilterListItem label="NYISO" value={{ tag: "NYISO" }} />
              <FilterListItem label="ERCOT-PTP" value={{ tag: "ERCOT-PTP" }} />
          </FilterList>
      </CardContent>
  </Card>
);


export const DailyTrade = () => (
  <List aside={<PostFilterSidebar />} filterDefaultValues={{ date: '2023-07-25', tag: 'ALL' }} >
    <Datagrid bulkActionButtons={false}>
      <NumberField source="he" label="HE"/>
      <NumberField options={{ maximumFractionDigits: 2 }} source="bid_volume_sum" label="Bid (MW)"/>
      <NumberField source="clear_volume_sum" label="Cleared (MW)"/>
      <NumberField options={{ maximumFractionDigits: 2 }} source="clear_rate" label="Cleared Rate" />
      <NumberField source="bid_node_count" label="Nodes Bid" />
      <NumberField source="clear_node_count" label="Nodes Cleared" />
      <NumberField options={{ style: 'currency', currency: 'USD' }} source="price_min" label="Min Bid Price" />
      <NumberField options={{ maximumFractionDigits: 2, style: 'currency', currency: 'USD' }} source="price_avg" label="Avg Bid Price" />
      <NumberField options={{ style: 'currency', currency: 'USD' }} source="price_max" label="Max Bid Price" />
      <NumberField options={{ style: 'currency', currency: 'USD' }} source="dalmp_avg" label="Avg DA" />
    </Datagrid>
  </List>
);
