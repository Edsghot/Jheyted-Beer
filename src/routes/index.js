import { createNativeStackNavigator} from '@react-navigation/native-stack'

//import pages
import Index from '../pages'
import Login from '../pages/autentication/login'
import Register from '../pages/autentication/register'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
       <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Index} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
       </Stack.Navigator> 
    )
}
