import { router } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyState, InfoBox, VideoCard } from "../../components";
import { icons } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";
import { getUserPosts, signOut } from "../../lib/appwrite";
import { useAppwrite } from "../../lib/useAppwrite";

const Profile = () => {
   const { user, setUser, setIsLoggedIn } = useGlobalContext();
   const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

   const logout = async () => {
      await signOut();
      setUser(null);
      setIsLoggedIn(false);

      router.replace("/sign-in");
   };

   return (
      <SafeAreaView className="bg-primary h-full">
         <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => <VideoCard video={item} />}
            ListEmptyComponent={() => (
               <EmptyState
                  title="Видео не найдены"
                  subtitle="У пользователя нет созданных видео"
               />
            )}
            ListHeaderComponent={() => (
               <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
                  <TouchableOpacity
                     onPress={logout}
                     className="flex w-full items-end mb-10">
                     <Image
                        source={icons.logout}
                        resizeMode="contain"
                        className="w-6 h-6"
                     />
                  </TouchableOpacity>

                  <View className="w-16 h-16 border border-blue rounded-lg flex justify-center items-center">
                     <Image
                        source={{ uri: user?.avatar }}
                        className="w-[90%] h-[90%] rounded-lg"
                        resizeMode="cover"
                     />
                  </View>

                  <InfoBox
                     title={user?.username}
                     containerStyles="mt-5"
                     titleStyles="text-lg"
                  />

                  <View className="mt-5 flex flex-row">
                     <InfoBox
                        title={posts.length || 0}
                        subtitle="Постов"
                        titleStyles="text-xl text-blue"
                        containerStyles="mr-10"
                     />
                     <InfoBox
                        title="1.2k"
                        subtitle="Подписчиков"
                        titleStyles="text-xl text-blue"
                     />
                  </View>
                  <Text className="mt-5 -mb-3 text-2xl text-blue">
                     Мои видеоролики:
                  </Text>
               </View>
            )}
         />
      </SafeAreaView>
   );
};

export default Profile;
