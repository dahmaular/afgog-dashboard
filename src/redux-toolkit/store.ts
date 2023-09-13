// import { configureStore } from "@reduxjs/toolkit";
import { BookMarkReducer } from "./reducers/BookMarkReducer";
import { ContactReducer } from "./reducers/ContactReducer";
import { EmailReducer } from "./reducers/EmailReducer";
import { TaskReducer } from "./reducers/TaskReducer";
import { ChatReducer } from "./reducers/ChatReducer";
import { ThemeCustomizer } from "./reducers/ThemeCustomizer";
import { FilterReducer } from "./reducers/Ecommerce/FilterReducer";
import { ProductReducer } from "./reducers/Ecommerce/ProductReducer";
import { CartReducer } from "./reducers/Ecommerce/CartReducer";
import { TodoReducer } from "./reducers/TodoReducer";
import { StickyReducer } from "./reducers/StickyReducer";
import { TableDataReducer } from "./reducers/TableDataReducer";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useDispatch } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import afgogAuthApi from "../Service/auth/slice";
import storage from "redux-persist/lib/storage";
import { apis } from "../api";

const reducer = combineReducers({
  [apis.reducerPath]: apis.reducer,
  user: afgogAuthApi,
  BookMarkReducer,
  ContactReducer,
  TaskReducer,
  EmailReducer,
  ChatReducer,
  FilterReducer,
  ProductReducer,
  CartReducer,
  TodoReducer,
  ThemeCustomizer,
  StickyReducer,
  TableDataReducer,
});

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    //   whitelist: ['app'],
    // blacklist: [],
  };
  
  const persistedReducer = persistReducer(persistConfig, reducer);
  

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }),
    apis.middleware,
  ],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
