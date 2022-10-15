import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import React from "react";
import { useMemo } from "react";
import {useHeaderHeight} from '@react-navigation/elements'
import {Platform} from 'react-native'

export default function useApplyHeaderWorkaround(setOptions: (options: NativeStackNavigationOptions) => void) {
    const headerHeight = useHeaderHeight();
  
    const androidHeaderFix = useMemo(
      () => ({
        headerTransparent: true,
        headerStyle: {backgroundColor: 'white'},
        contentStyle: {paddingTop: headerHeight},
      }),
      [headerHeight],
    );
  
    React.useLayoutEffect(() => {
      Platform.OS == 'android' && setOptions(androidHeaderFix);
    }, [setOptions, androidHeaderFix]);
  }