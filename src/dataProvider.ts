import simpleRestProvider from "ra-data-simple-rest";

export const dataProvider = simpleRestProvider(
  import.meta.env.VITE_BACK_END_URL
);