import React from 'react';

import { useIsFirstTime } from '@/core/hooks';
import { Button, FocusAwareStatusBar, SafeAreaView, Text, View } from '@/ui';

import { Cover } from './cover';
export const Onboarding = () => {
  const [_, setIsFirstTime] = useIsFirstTime();
  return (
    <SafeAreaView>
    <View className="flex h-full items-center bg-slate-950">
      {/* <FocusAwareStatusBar /> */}
      <View className="w-full bg-white h-1/2 border-2 rounded-b-3xl">
        {/* <Cover /> */}
      </View>
      <View className="flex justify-between h-1/2 pt-8 pb-4">
        <View>
          <Text className="px-6 my-6 text-emerald-50 text-center text-4xl font-bold">
            Find the jobs that suit your skills
          </Text>
          <Text className="mb-4 text-emerald-50 text-center text-base text-gray-600">
            We help you find your dream mission, register and complete your profile to start making money!
          </Text>
        </View>

          <Button
            label="Let's Get Started "
            onPress={() => {
              setIsFirstTime(false);
            }}
            />
      </View>
    </View>
      </SafeAreaView>
  );
};
