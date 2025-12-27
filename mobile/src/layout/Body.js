import { UIDashboardProvider } from "../context/UIDashboardContext";
import AppNavigator from "../navigation/AppNavigator";



export default function Body() {
  return (
    <UIDashboardProvider>
      <AppNavigator />
    </UIDashboardProvider>
  )
}


