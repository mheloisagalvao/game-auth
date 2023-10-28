import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Login } from '../paginas/Login';
import { Cadastro } from '../paginas/Cadastro';
import { Home } from '../paginas/Home';
import { Historico } from '../paginas/Historico';

import { AntDesign } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { color: 'purple' },
          tabBarIcon: ({}) => (
            <AntDesign name="home" size={24} color="purple" />
          ),
        }}
        component={Home} />
      <Tab.Screen
        name="Historico"
        options={{
          tabBarLabel: 'Histórico',
          tabBarLabelStyle: { color: 'purple' },
          tabBarIcon: ({}) => (
            <AntDesign name="profile" size={24} color="purple" />
          ),
        }}
        component={Historico} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="MyTabs" component={MyTabs} /> 
    </Stack.Navigator>
  );
}

export default function Nav() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}