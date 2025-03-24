import { Tabs } from "expo-router";
import Ionicons  from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return(
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffffff',
      tabBarInactiveTintColor: '#ffffff',
      headerStyle: {backgroundColor:'#3DA6F5',
        borderBottomWidth: 0,
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle:{backgroundColor:'#3DA6F5',
        borderTopWidth: 0,
      }
    }}
    
    >
      <Tabs.Screen
      name="index"
      options={{
        title: "Home",
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24}></Ionicons>
        ),
      }}
      />
      <Tabs.Screen
      name="about"
      options={{
        title:"About",
        tabBarIcon: ({ color, focused}) => (
          <AntDesign name={focused ? "questioncircle" : "questioncircleo"}  size={24} color={color} /> 
        ),
      }}
      />
  </Tabs>
  );
}   
