import { createStore, applyMiddleware, combineReducers } from 'redux';
import pluginReducer from './pluginReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  pluginReducer: pluginReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

