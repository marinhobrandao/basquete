import { Tabs } from "expo-router";
import Ionicons  from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



export default function TabLayout() {
  return(
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#000',
      headerStyle: {backgroundColor:'#F27A33',
        borderBottomWidth: 0,
      },
      headerShadowVisible: false,
      headerTintColor: '#000',
      tabBarStyle:{backgroundColor:'#F27A33',
        borderTopWidth: 0,
      }
    }}
    
    >
      <Tabs.Screen
      name="index"
      options={{
        title: "Início",
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name={focused ? "basketball-hoop" : "basketball-hoop-outline"} color={color} size={24}></MaterialCommunityIcons>
        ),
      }}
      />

      <Tabs.Screen
      name="about"
      options={{
        title:"Sobre",
        tabBarIcon: ({ color, focused}) => (
          <AntDesign name={focused ? "infocirlce" : "infocirlceo"} color={color} size={24}></AntDesign>
        ),
      }}     
      />

      <Tabs.Screen
      name="toDoList"
      options={{
        title: "Tarefas",
        tabBarIcon: ({ color, focused }) => (
          <AntDesign name={focused ? "appstore1" : "appstore-o"} color={color} size={24}></AntDesign>
        ),
      }}
      />

      <Tabs.Screen
      name="buscaTime"
      options={{
        title:"Times",
        tabBarIcon: ({ color, focused}) => (
          <Ionicons name={focused ? "basketball" : "basketball-outline"} color={color} size={24}></Ionicons>
        ),
      }}
      />

  </Tabs>
  );
}   
