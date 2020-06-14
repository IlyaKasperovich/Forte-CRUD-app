import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NotFoundPage () {
  let location = useLocation();
  return (
    <div>
      <h1>Page not found</h1>
      <h3>No info for <code>{location.pathname}</code></h3>
    </div>
  )
}