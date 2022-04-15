import React, { useEffect, useState } from 'react'
import './WidgetWrap.css'
import Widget from '../Widget/Widget.tsx'
import { getPlugins } from '../../ApiService.ts'
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { savePlugins } from '../../redux/pluginActions.ts';

const WidgetWrap = () => {

  const { plugins } = useAppSelector(state => state.pluginReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function init() {
      const fetchedPlugins = await getPlugins();
      dispatch(savePlugins(fetchedPlugins));
    }
    init()
  }, [])

  return (
    <div className="WidgetWrap">
      {plugins && plugins.map(plugin => <Widget key={plugin.id} plugin={plugin} />)}
    </div>
  )
}

export default WidgetWrap