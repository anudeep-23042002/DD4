import { createContext, useReducer } from 'react'
import * as React from 'react';
export const PickupContext = createContext()

export const pickupReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PICKUPS':
      return { 
        pickups: action.payload 
      }
    default:
      return state
  }
}

export const PickupContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pickupReducer, { 
    pickups: null
  })
  
  console.log('pickupContext state:', state)
  return (
    <PickupContext.Provider value={{ ...state, dispatch }}>
      { children }
    </PickupContext.Provider>
  )
}