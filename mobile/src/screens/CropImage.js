// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { dashboardStyle } from "../styles/dashboardStyle";
// import * as ImageManipulator from "expo-image-manipulator";
// import { useState } from "react";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
// } from "react-native-reanimated";

import { Image, Text, View } from "react-native";
import { useState } from 'react';

// const CropImage = ({ route }) => {
//   const { image } = route.params;
//   const [croppedImage, setCroppedImage] = useState(null);
//   const [imageSize, setImageSize] = useState({
//     width: 0,
//     height: 0,
//   });
//     // crop box position & size (STEP 3)
//   const cropX = useSharedValue(50);
//   const cropY = useSharedValue(50);
//   const cropW = useSharedValue(200);
//   const cropH = useSharedValue(250);
//   const startX = useSharedValue(0);
//   const startY = useSharedValue(0);
//   // drag handler (STEP 4 - safe)
//   // drag handler (STEP 7 FINAL – stable)
//   const onPanGestureEvent = (event) => {
//     console.log(event);
    
//     const { translationX, translationY } = event.nativeEvent;

//     cropX.value = startX.value + translationX;
//     cropY.value = startY.value + translationY;
//   };

//   const onPanStateChange = (event) => {
//     if (event.nativeEvent.state === 2) {
//       startX.value = cropX.value;
//       startY.value = cropY.value;
//     }
//   };

//   // crop box style (STEP 5)
//   const cropStyle = useAnimatedStyle(() => ({
//     position: "absolute",
//     left: cropX.value,
//     top: cropY.value,
//     width: cropW.value,
//     height: cropH.value,
//     borderWidth: 2,
//     borderColor: "lime",
//     backgroundColor: "rgba(0,255,0,0.15)",
//   }));

//   const loadImageSize = () => {
//     Image.getSize(image, (width, height) => {
//       setImageSize({ width, height });
//     });
//   };
//   const cropImage = async () => {
//     const displayWidth = 350; // image container height
//     const displayHeight = 350;

//     const scaleX = imageSize.width / displayWidth;
//     const scaleY = imageSize.height / displayHeight;

//     const result = await ImageManipulator.manipulateAsync(
//       image,
//       [
//         {
//           crop: {
//             originX: cropX.value * scaleX,
//             originY: cropY.value * scaleY,
//             width: cropW.value * scaleX,
//             height: cropH.value * scaleY,
//           },
//         },
//       ],
//       {
//         compress: 1,
//         format: ImageManipulator.SaveFormat.JPEG,
//       }
//     );

//     setCroppedImage(result.uri);
//   };

//   return (
//     <View style={globalStyles.container}>
//       <View style={[globalStyles.content, globalStyles.itemCenter]}>
//         <Text style={dashboardStyle.welcome}>Crop Image</Text>

//         <View style={{ width: "100%", height: 350 }}>
//           <Image
//             source={{ uri: croppedImage || image }}
//             style={{ width: "100%", height: "100%", borderRadius: 12 }}
//             resizeMode="contain"
//             onLoadEnd={loadImageSize}
//           />

//           <PanGestureHandler
//             onGestureEvent={onPanGestureEvent}
//             onHandlerStateChange={onPanStateChange}
//           >
//             <Animated.View style={cropStyle} />
//           </PanGestureHandler>
//         </View>
//         <View style={styles.resizeRow}>
//           <TouchableOpacity
//             style={styles.resizeBtn}
//             onPress={() => {
//               cropW.value += 20;
//               cropH.value += 20;
//             }}
//           >
//             <Text style={styles.resizeText}>+</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.resizeBtn}
//             onPress={() => {
//               cropW.value -= 20;
//               cropH.value -= 20;
//             }}
//           >
//             <Text style={styles.resizeText}>−</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity
//           style={[dashboardStyle.card, { marginTop: 20 }]}
//           onPress={cropImage}
//         >
//           <Text style={dashboardStyle.cardTitle}>Crop Image</Text>
//           <Text style={[globalStyles.Color.white, globalStyles.itemCenter]}>
//             Crop center area
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   resizeRow: {
//     flexDirection: "row",
//     marginTop: 15,
//     gap: 20,
//   },
//   resizeBtn: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "lime",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   resizeText: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#000",
//   },
// });

// export default CropImage;


const CropImage = ({ route }) => {
  const {image} = route.params
  const [imageSize, setImageSize ] = useState({
    width: 0,
    height: 0,
  })

  const loadImageSize = () => {
    Image.getSize(image, (width, height) => {
      setImageSize({ width, height });
    });
  };

  const onPanGestureEvent = (event) => {
    console.log(event);
    
  }
  
  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.content, globalStyles.itemCenter]}>
        <Text style={dashboardStyle.welcome}>Crop Image</Text>
        <View style={{ width: "100%", height: 350 }}>
          <Image 
            source={{uri: image}}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 12,
            }}
            resizeMode="contain"
            onLoadEnd={loadImageSize}
          />
        </View>
      </View>
    </View>
  )
}

export default CropImage;