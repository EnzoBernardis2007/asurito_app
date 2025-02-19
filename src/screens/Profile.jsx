import { useState } from "react"
import { View, Text } from "react-native"

export default function Profile() {
    const [athleteInfo, setAthleteInfo] = useState({})

    const { full_legal_name, email } = athleteInfo

    return(
        <View>
            <Text>{full_legal_name}</Text>
            <Text>{email}</Text>
        </View>
    )
}