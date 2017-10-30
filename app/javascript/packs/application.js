import React from 'react'
import ReactDOM from 'react-dom'
import MainIndex from '../react/containers/mainIndex'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MainIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})
