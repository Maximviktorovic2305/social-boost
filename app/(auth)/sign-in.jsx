import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { images } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";
import { getCurrentUser, signIn } from "../../lib/appwrite";

const SignIn = () => {
   const { setUser, setIsLoggedIn } = useGlobalContext();
   const [form, setForm] = useState({
      email: "",
      password: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const submit = async () => {
      if (!form.email || !form.password) {
         Alert.alert("Error", "Заполните все поля");
      }

      setIsSubmitting(true);

      try {
         await signIn(form.email, form.password);
         const result = await getCurrentUser();
         setUser(result);
         setIsLoggedIn(true);

         router.replace("/home");
      } catch (error) {
         Alert.alert("Error", error.message);
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <SafeAreaView className="bg-primary h-full">
         <ScrollView>
            <View className="w-full justify-center h-full px-4 my-6">
               <Image
                  source={images.logo}
                  resizeMode="contain"
                  className="w-[150px] h-[50px] mb-8"
               />
               <Text className="text-2xl text-blue text-semibold font-psemibold uppercase text-center">
                  Войти
               </Text>

               <FormField
                  title="Почта"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  placeholder="Введите почту..."
                  otherStyles="mt-7"
                  keyboardType="email-address"
               />

               <FormField
                  title="Пароль"
                  value={form.password}
                  placeholder="Введите пароль..."
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-7"
               />

               <CustomButton
                  title="Войти"
                  handlePress={submit}
                  containerStyles="mt-8"
                  isLoading={isSubmitting}
               />

               <View className="justify-center pt-5 flex-row gap-2">
                  <Text className="text-lg text-gray-100 font-pregular">
                     Все еще нет аккаутна!?
                  </Text>
                  <Link
                     href="/sign-up"
                     className="text-lg font-psemibold text-blue opacity-60">
                     Регистрация
                  </Link>
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default SignIn;
