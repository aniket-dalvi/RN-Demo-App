import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PostList from './screens/post_list';
import PostView from './screens/post_view';
import UserDetails from './screens/user_details';

const Stack = createStackNavigator();

function Routes(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PostList">
        <Stack.Screen name="PostList" options={{ title: 'Post List' }} component={PostList} />
        <Stack.Screen name="PostView" options={{ title: 'Post View' }} component={PostView} />
        <Stack.Screen name="UserDetails" options={{ title: 'User Details' }} component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;