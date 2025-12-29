import { ComponentProvider } from "../context/componentContext";
import AppNavigator from "../navigation/AppNavigator";



export default function Body() {
  return (
    <ComponentProvider>
      <AppNavigator />
    </ComponentProvider>
  )
}


