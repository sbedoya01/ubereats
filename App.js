import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import RootNavigator from './src/navigation';

import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
   <NavigationContainer>

      <RootNavigator />
        {/* <RestaurantDetailsScreen/> */}
        {/* <HomeScreen/> */}
        {/* <DishDetailsScreen/> */}
        {/* <Basket/> */}
        {/* <OrdersScreen /> */}
        {/* <OrderDetails /> */}


        <StatusBar style="light" />
      
    </NavigationContainer> 
  );
}

