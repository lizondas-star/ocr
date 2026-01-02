import { View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { dashboardStyle } from "../styles/dashboardStyle";
import * as ImageManipulator from "expo-image-manipulator";
import { useState } from "react";

const CropImage = ({ route }) => {
  const { image } = route.params;
  const [croppedImage, setCroppedImage] = useState(null);

  const cropImage = async () => {
    const result = await ImageManipulator.manipulateAsync(
      image,
      [
        {
          crop: {
            originX: 0,
            originY: 0,
            width: 800,
            height: 800,
          },
        },
      ],
      { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
    );

    setCroppedImage(result.uri);
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}>
        <Text style={dashboardStyle.welcome}>Crop Image</Text>

        <Image
          source={{ uri: croppedImage || image }}
          style={{
            width: "100%",
            height: 350,
            borderRadius: 12,
          }}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={[dashboardStyle.card, { marginTop: 20 }]}
          onPress={cropImage}
        >
          <Text style={dashboardStyle.cardTitle}>Crop Image</Text>
          <Text style={[globalStyles.Color.white, globalStyles.center]}>
            Crop center area
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CropImage;
