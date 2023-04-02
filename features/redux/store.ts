import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { cadastroReducer } from "./cadastro-usuario-slice";
import { veiculoReducer } from './cadastro-veiculo-slice';
import { loginReducer } from "./login-slice";
import { mobileMenuReducer } from "./mobile-menu-slice";
import { modalReducer } from "./modal-slice";
import { refetchReducer } from './refetch-slice';
import { storage } from './storage';
import { abastecimentoReducer } from "./cadastro-abastecimento-slice";
import { alertReducer } from "./alert-slice";

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
    veiculo: veiculoReducer,
    abastecimento: abastecimentoReducer,
    refetch: refetchReducer,
    alert: alertReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
            devTools: process.env.NODE_ENV !== 'production',
    });
};

export const store = makeStore();
export const persistor = persistStore(store)