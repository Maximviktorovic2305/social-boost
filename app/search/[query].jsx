import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyState, SearchInput, VideoCard } from "../../components";
import { useAppwrite } from "../../lib/useAppwrite";
import { searchPosts } from "../../lib/appwrite";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

console.log(query, posts)

  useEffect(() => {
    refetch();
  }, [query]);

  

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item}
          />
        )}
        ListHeaderComponent={() => (
          <>
            <View className="flex my-6 px-4">
              <Text className="font-pmedium text-gray-100 text-sm">
                Результаты поиска
              </Text>
              <Text className="text-2xl font-psemibold text-white mt-1">
                {query}
              </Text>

              <View className="mt-6 mb-8">
                <SearchInput initialQuery={query} refetch={refetch} />
              </View>
            </View>
          </>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="Видео не найдено"
            subtitle="По Вашему запросу не найдено ни одного видео"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
