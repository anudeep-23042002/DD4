import { PickupContext } from "../contexts/pickupcontext"
import { useContext } from "react"

export const UsepickupContext = () => {
  const context = useContext(PickupContext)

  if(!context) {
    throw Error('usepickupContext must be used inside an pickupContextProvider')
  }

  return context
}