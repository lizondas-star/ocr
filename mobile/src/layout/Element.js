import { View } from 'react-native-web'
import { headerStyles } from '../styles/headerStyle';

const Element = ({element}) => {
    console.log(headerStyles.headerTopBarItem);
    const content = element?.content || '';

    
  return (
    <View style={headerStyles.headerTopBarItem}>
      <ul className="header-top-bar-ul">
        {
            content?.map((item, index) => {
                const order = item.order || ['icon', 'img', 'text'];
                return(
                    <li key={index}>
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
