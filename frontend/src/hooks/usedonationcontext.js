import { DonationContext } from "../contexts/donationcontext"
import { useContext } from "react"

export const useDonationContext = () => {
  const context = useContext(DonationContext)

  if(!context) {
    throw Error('useDonationContext must be used inside an DonationContextProvider')
  }

  return context
}