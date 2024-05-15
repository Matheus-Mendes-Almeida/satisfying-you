import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NovaConta from "./src/screens/NovaConta";
import NovaPesquisa from "./src/screens/NovaPesquisa";
import AcaoPesquisa from "./src/screens/AcaoPesquisa";
import Home from "./src/screens/home";
import Login from "./src/screens/Login";
import RecuperarSenha from "./src/screens/RecuperarSenha";
import Drawer from "./src/components/Drawer";
import EditarPesquisa from "./src/screens/EditarPesquisa";
import { AgradecimentoParticipacao } from "./src/screens/pages/Agradecimento";
import { ColetaScreen } from "./src/screens/pages/Coleta";
import { RelatorioScreen } from "./src/screens/pages/Relatorio";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{
                headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: '#573FBA',
                headerTitleStyle: { color: 'white', fontFamily: 'AveriaLibre-Regular' }
            }}>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

                <Stack.Screen name="EditarPesquisa" component={EditarPesquisa} options={{ title: 'Modificar pesquisa' }} />
                <Stack.Screen name="NovaConta" component={NovaConta} />
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
                <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} />
                <Stack.Screen name='Agradecimento' component={AgradecimentoParticipacao} options={{ headerShown: false }} />
                <Stack.Screen name="AcaoPesquisa" component={AcaoPesquisa} />
                <Stack.Screen name='Coleta' component={ColetaScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Relatorio" component={RelatorioScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App