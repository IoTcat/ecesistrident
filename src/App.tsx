import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from './authProvider';
import { lightTheme } from "./layout/theme";
import { Login, Layout } from './layout';


import DailyTrade from "./reports";

export const App = () => (
  <Admin dataProvider={dataProvider} theme={lightTheme}
  layout={Layout}
  authProvider={authProvider}
  loginPage={Login}
  >
    <Resource name="report/daily-trade" options={{ label: 'Orders' }} {...DailyTrade} /> 
  </Admin>
);
