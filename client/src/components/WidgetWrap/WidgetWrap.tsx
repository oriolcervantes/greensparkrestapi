import React, { useEffect } from 'react'
import './WidgetWrap.css'
import Widget from '../Widget/Widget'
import { getPlugins } from '../../ApiService'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { savePlugins } from '../../redux/pluginActions';
import Plugin from '../../interfaces/plugin'

const WidgetWrap = () => {

  const { plugins } = useAppSelector(state => state.pluginReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function init() {
      const fetchedPlugins = await getPlugins();
      dispatch(savePlugins(fetchedPlugins) as any);
    }
    init()
  }, [])

  return (
    <div className="WidgetWrap">
      {plugins && plugins.map((plugin: Plugin) => <Widget key={plugin._id} plugin={plugin} />)}
    </div>
  )
}

export default WidgetWrap