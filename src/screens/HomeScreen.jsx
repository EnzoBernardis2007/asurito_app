import { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"

export default function HomeScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if(response.ok) {
            const data = await response.json()
            navigation.navigate('BottomNavigator')
        }
    }

    return(
        <View>
            <Text>Login</Text>

            <Text>Nome</Text>
            <TextInput
                placeholder="Insira aqui..."
                value={email}
                onChangeText={setEmail}
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