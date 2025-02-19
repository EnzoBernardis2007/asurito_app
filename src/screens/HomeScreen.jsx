import { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"

export default function HomeScreen({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        navigation.navigate('BottomNavigator')
    }

    return(
        <View>
            <Text>Login</Text>

            <Text>Nome</Text>
            <TextInput
                placeholder="Insira aqui..."
                value={username}
                onChangeText={setUsername}
            />
            
            <Text>Senha</Text>
            <TextInput
                placeholder="Insira aqui..."
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Button title="Entrar" onPress={handleLogin} />

            <Button 
                title="Não tem uma conta? crie agora!" 
                onPress={() => navigation.navigate('Sign')}
            />
        </View>
    )
}