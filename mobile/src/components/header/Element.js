import { View } from 'react-native-web'
import { headerStyles } from '../../styles/headerStyle'
import '../../assets/element.css'

const Element = ({element}) => {
  // console.log(element);
  const content = element?.content || '';
    
  return (
    <View style={headerStyles.headerTopBarItem}>
      <ul className={`ul header-top-bar-ul header-top-bar-ul-${element?.position}`}>
        {
            content?.map((item, index) => {
              console.log(item);
              
                const order = item.order || ['icon', 'img', 'text'];
                return(
                    <li key={index} className={`li header-top-bar-li ${item.class && 'header-top-bar-li-'+ item.class || ''}`}>
                        {order.map((field, i) => {
                            if (field === 'icon') return item.icon && <span key={i}>{item.icon}</span>;
                            if (field === 'text') return item.text && <span key={i}>{item.text}</span>;
                            if (field === 'img' && item.img) return item.img && <img key={i} src={item.img} alt={item.text} />;
                            return null;
                        })}
                    </li>
                )
            })
        }
      </ul>
    </View>
  )
}

export default Element
