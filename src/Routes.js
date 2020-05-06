import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Drinks from './screen/drinks';
import Category from './screen/category';
import Drink_Details from './screen/drink_details';

const Stack = createStackNavigator();

export default function createRouter(props) {
  console.log({ props });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Drink_Details" component={Drink_Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
