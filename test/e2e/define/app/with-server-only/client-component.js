/* eslint-disable no-undef */
'use client'

import { useState, useEffect } from 'react'

export function ClientComponent() {
  const [serverVar, setServerVar] = useState('<loading>')
  useEffect(() => {
    setServerVar(
      typeof MY_SERVER_VARIABLE === 'string' ? MY_SERVER_VARIABLE : 'not set'
    )
  }, [setServerVar])

  return <>{serverVar}</>
}
