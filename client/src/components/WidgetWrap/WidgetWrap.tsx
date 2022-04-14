import React, { useEffect, useState } from 'react'
import './WidgetWrap.css'
import Widget from '../Widget/Widget.tsx'
import { getPlugins } from '../../ApiService.ts'
import Plugin from '../../Interfaces/plugin'

const WidgetWrap = () => {

  const [plugins, setPlugins] = useState<Plugin[]>()

  useEffect(() => {
    async function init() {
      const fetchPlugins = await getPlugins();
      setPlugins(fetchPlugins);
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