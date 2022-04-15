import Plugin from '../interfaces/plugin'

interface IAction {
  payload: any;
  type: any;
}

type PluginState = {
  plugins: Plugin[] | null
};

const initState: PluginState = {
  plugins: []
};

const pluginReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case 'GET_PLUGINS':
      return {
        ...state,
        plugins: action.payload,
      };

    default:
      return state;
  }
};

export default pluginReducer;