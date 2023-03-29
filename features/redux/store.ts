import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { storage } from './storage';
import { mobileMenuReducer } from "./mobile-menu-slice";
import { modalReducer } from "./modal-slice";
import { loginReducer } from "./login-slice";
import { cadastroReducer } from "./cadastro-usuario-slice";
import { veiculoReducer } from './cadastro-veiculo-slice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    modal: modalReducer,
    mobileMenu: mobileMenuReducer,
    login: loginReducer,
    cadastro: cadastroReducer,
    veiculo: veiculoReducer
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