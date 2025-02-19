import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Championships from '../screens/Championships';
import { MaterialIcons } from '@expo/vector-icons';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Campeonatos') {
                    iconName = 'sports-martial-arts';
                } else {
                    iconName = 'account-circle';
                }

                return <MaterialIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#0fbab7', 
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Campeonatos" component={Championships} />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    );
}
