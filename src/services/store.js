import { configureStore } from '@reduxjs/toolkit';

import { articleApi } from './article';

export const store = configureStore({
  // get spesific state
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
