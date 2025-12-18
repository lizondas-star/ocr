import { View, Text, Image } from 'react-native'
import { headerStyles } from '../../styles/headerStyle'
import { globalStyles } from '../../styles/globalStyles';

const Element = ({element}) => {
  const content = element?.content || '';
  
  const positionClass = element?.position && headerStyles[`headerTopBarColunm_${element.position}`] || '';
    
  return (
    <View style={[headerStyles.headerTopBarColunm, positionClass]}>
      {
        content?.map((item, index) => {
            const order = item.order || ['icon', 'img', 'text'];
            return(
              <View key={index}>
                {order.map((field, i) => {
                    if (field === 'icon') return item.icon && <Text key={i} style={[headerStyles.icon]}>{item.icon}</Text>;
                    if (field === 'text') return item.text && <Text key={i} style={globalStyles.Color.white}>{item.text}</Text>;
                    if (field === 'img' && item.img) return <Image key={i} source={{uri: item.img}} style={{width: 20, height: 20}} />;
                    return null;
                })}
              </View>
          )
        })
      }
    </View>
  )
}

export default Element
