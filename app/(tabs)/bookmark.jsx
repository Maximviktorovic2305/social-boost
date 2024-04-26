import { StatusBar } from "expo-status-bar";
import { Image, Text } from "react-native";
import { View } from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

const Bookmark = () => {
   return (
      <SafeAreaView className="px-4 my-6 bg-primary h-full">
         <Text className="text-2xl text-gray-100 font-psemibold mt-3">
            Приложение создано с использованием следующих технологий:
         </Text>
         <Text className="text-2xl text-blue font-psemibold mt-5">
            Frontend:
         </Text>
         <View className="flex-row items-center justify-between">
            <Text className="text-xl text-gray-200 font-psemibold mt-3">
               react-native
            </Text>
            <Image source={images.react_native} />
         </View>
         <Text className="text-xl text-gray-200 font-psemibold mt-3">expo</Text>
         <Text className="text-xl text-gray-200 font-psemibold mt-3">
            expo-av
         </Text>
         <Text className="text-xl text-gray-200 font-psemibold mt-3">
            expo-document-picker
         </Text>
         <Text className="text-xl text-gray-200 font-psemibold mt-3">
            nativewind
         </Text>
         <Text className="text-xl text-gray-200 font-psemibold mt-3">
            react-native-animatable
         </Text>
         <Text className="text-2xl text-blue font-psemibold mt-7">
            Backend:
         </Text>
         <View className="flex-row items-center justify-between">
            <Text className="text-xl text-gray-200 font-psemibold mt-3">
               appwrite
            </Text>
            <Image
               className="h-10 w-10 mr-4"
               resizeMode="contain"
               source={images.appwrite}
            />
         </View>
         <Text className="text-xl text-gray-200 font-psemibold mt-3">
            react-native-appwrite
         </Text>

         <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
   );
};

export default Bookmark;
