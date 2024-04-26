import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";
import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";

export default function App() {
   const { isLoading, isLoggedIn } = useGlobalContext();

   if (!isLoading && isLoggedIn) return <Redirect href="/home" />

   return (
      <SafeAreaView className="bg-primary h-full">
         <Loader isLoading={isLoading} />
         <ScrollView contentContainerStyle={{ height: "100%" }}>
            <View className="w-full justify-center items-center gap-5 px-4 mt-3">
               <Image
                  source={images.logo}
                  className="w-[250px] h-[100px] mb-5"
                  resizeMode="contain"
               />

               <Image
                  source={images.cards}
                  className="max-w-[380px] w-full h-[300px] "
                  resizeMode="contain"
               />
            </View>

            <View className="mt-9">
               <Text className="text-2xl text-white font-bold text-center">
                  Открой безграничные возможности с{" "}
                  <Text className="text-blue">Social Boost</Text>
               </Text>

               <Text className="font-pregular text-sm text-gray-100 mt-5 text-center">
                  Когда инновации вместе с вдохновением
               </Text>
               <CustomButton
                  handlePress={() => router.push("/sign-in")}
                  containerStyles="w-full mt-14"
                  title="Продолжить..."
               />
            </View>
         </ScrollView>
         <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
   );
}
