import React from 'react';
import {Bell} from 'lucide-react-native';

import { FocusAwareStatusBar, Image, Input, ScrollView, Text, View } from '@/ui';
import {useColorScheme} from 'nativewind';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Style = () => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView>
        <View className="flex-1  px-4 pt-10">
          <View className='flex flex-row justify-between'>
            <Image
              className='w-12 aspect-square h-12 rounded-3xl'
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
              source={"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}
            />
            <View>
              <View className='relative p-2.5 rounded-3xl  border-2 border-slate-300'>
                <Text className='absolute text-xs bg-emerald-500 p-0.5 rounded-3xl text-emerald-50 -right-1 -top-1'>23</Text>
                <Bell color={ isDark? 'white' : 'black'} size={24} className='bg-black' />
              </View>
            </View>
          </View>
          <Text className='mt-6 text-2xl font-bold'>Let's find you a great mission.</Text>
          <View className='my-6'>
            <Input />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
