import { View } from 'react-native'
import { headerStyles } from '../../styles/headerStyle'
import { globalStyles } from '../../styles/globalStyles';
import { useComponent } from '../../context/componentContext';
import { MaterialIcons } from "@expo/vector-icons";

const Element = ({element}) => {
  const {getComponent} = useComponent();  
    
  return (
    <View style={headerStyles.items}>
      {
        element && element?.map((item, index) => {
          const component = getComponent(item);
          return(
            <View key={index} style={headerStyles.item}>
              { 
                component.MaterialIcons && <MaterialIcons name={component.MaterialIcons} style={[globalStyles.Color.white, headerStyles.icon]}/>
              }
            </View>
          )
        })
      }
    </View>
  )
}

export default Element
