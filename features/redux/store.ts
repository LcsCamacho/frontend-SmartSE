import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { mobileMenuReducer } from "./mobile-menu-slice";
import { modalReducer } from "./modal-slice";
import { storage } from './storage';
import { userReducer } from "./user-slice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    modal: modalReducer,
    mobileMenu: mobileMenuReducer,
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    });
};

export const store = makeStore();
export const persistor = persistStore(store)