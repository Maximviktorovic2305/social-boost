import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import VideoCard from "../../components/VideoCard";
import { images } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { useAppwrite } from "../../lib/useAppwrite";

const Home = () => {
   const { user } = useGlobalContext();
   const [refreshing, setRefreshing] = useState(false);

   const { data: latestPosts, refetch: refetchLatestPosts } =
      useAppwrite(getLatestPosts);
   const { data: posts, refetch } = useAppwrite(getAllPosts);

   const onRefresh = async () => {
      setRefreshing(true);
      await refetch();
      await refetchLatestPosts();
      setRefreshing(false);
   };

   // console.log(posts)

   return (
      <SafeAreaView className="bg-primary">
         <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            ListHeaderComponent={() => (
               <View className="flex my-6 px-4 space-y-6">
                  <View className="flex items-start justify-between flex-row mb-6">
                     <View>
                        <Text className="font-pmedium text-sm text-gray-100">
                           Добро пожаловать
                        </Text>
                        <Text className="text-xl font-psemibold text-blue">
                           {user?.username}
                        </Text>
                     </View>
                     <View className="mt-1.5">
                        <Image
                           source={images.logo}
                           className="w-[90px] h-10"
                           resizeMode="contain"
                        />
                     </View>
                  </View>

                  <SearchInput />

                  <View>
                     <Text className="text-gray-100 text-lg font-pregular mb-3">
                        Новые видеоролики
                     </Text>

                     <Trending posts={latestPosts ?? []} />
                  </View>
               </View>
            )}
            renderItem={({ item }) => <VideoCard video={item} />}
            ListEmptyComponent={() => (
               <EmptyState
                  title="Видео не найдено"
                  subtitle="Опубликуй свое видео первым"
               />
            )}
            refreshControl={
               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
         />
         <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
   );
};

export default Home;
