// ... (importações e telas de Home e Settings)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons' // Exemplo de uso de ícones

const Tab = createBottomTabNavigator()

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}