import { Dispatch } from 'redux';
import Plugin from '../interfaces/plugin'

interface IAction {
  payload: any;
  type: any;
}

export const savePlugins =
  (payload: Plugin[]) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'GET_PLUGINS', payload: payload });
  };
