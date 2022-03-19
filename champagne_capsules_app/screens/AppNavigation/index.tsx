import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Capsules from '../Capsules'
import Ruilbeurzen from '../Ruilbeurzen'
import Account from '../Account'
import color from '../../styles/color'


const Tab = createBottomTabNavigator()

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase>
}): BottomTabNavigationOptions => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean
    color: string
    size: number
  }) => {

    if (route.name === 'Capsules') return <MaterialIcons color={color} name= "format-list-bulleted" size={size} />
    if (route.name === 'Ruilbeurzen') return <FontAwesome5 color={color} name= "calendar" size={size} />
    if (route.name === 'Account') return <Ionicons color={color} name= "md-person-sharp" size={size} />
  },
  tabBarActiveTintColor: color.dark,
  tabBarInactiveTintColor: color.grey[500],
  tabBarStyle: {
    backgroundColor: color.light,
    borderTopWidth: 1,
    borderTopColor: color.grey[100],
  },

  headerStyle: {
    backgroundColor: color.light,
  },
  headerTitleStyle: {
    color: color.dark,
  },
})

export default () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Capsules" component={Capsules} />
      <Tab.Screen name="Ruilbeurzen" component={Ruilbeurzen} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}
