import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { dashboardStyle } from "../styles/dashboardStyle";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
export default function Scan() {
  const navigation = useNavigation();

  const pickFromGallery = async () => {    
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission required", "Gallery access is needed");
      return;
    }
    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });    

    if (!result.canceled) {
      navigation.navigate('CropImage', {image: result.assets[0].uri});
    }
  };
  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.content}>
          <Text style={dashboardStyle.welcome}>Choose Scan Method</Text>
          
          <View style={dashboardStyle.grid}>
            <TouchableOpacity  style={dashboardStyle.card}
              onPress={() => navigation.navigate('CameraScan')}
            >
              <MaterialIcons name="camera" style={dashboardStyle.icon} />
              <Text style={dashboardStyle.cardTitle}>Use Camera</Text>
              <Text style={[globalStyles.Color.white, globalStyles.center]}>Scan using device camera</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={dashboardStyle.card}
              onPress={pickFromGallery}
            >
              <MaterialIcons name="browse-gallery" style={dashboardStyle.icon} />
              <Text style={dashboardStyle.cardTitle}>From Gallery</Text>
              <Text style={[globalStyles.Color.white, globalStyles.center]}>Select image from gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={dashboardStyle.card}
              onPress={() => navigation.navigate('UrlScan')}
            >
              <MaterialIcons name="web" style={dashboardStyle.icon} />
              <Text style={dashboardStyle.cardTitle}>Use Image URL</Text>
              <Text style={[globalStyles.Color.white, globalStyles.center]}>Paste image URL</Text>
            </TouchableOpacity>

          </View>
        </View>
    </View>
  );
}