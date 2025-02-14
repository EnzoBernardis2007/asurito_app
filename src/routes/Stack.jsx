import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import Sign from '../screens/Sign'

const Stack = createNativeStackNavigator()

export default function StackRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Sign" component={Sign} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}