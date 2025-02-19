import { ScrollView } from "react-native-gesture-handler"
import { View, Pressable, StyleSheet, Text  } from "react-native"

const Card = ({ name, begin, end, description }) => {
    return (
        <View style={cardStyles.card}>
            <View style={cardStyles.header}>
                <Text>{name}</Text>
            </View>

            <View style={cardStyles.info}>
                <Text style={cardStyles.title}>Informações adicionais:</Text>
                <Text style={cardStyles.description}>{description}</Text>
            </View>

            <View style={cardStyles.footer}>
                <Text style={cardStyles.tag}>{`${begin}/${end}`}</Text>
                <Pressable style={cardStyles.button}>
                    <Text style={cardStyles.buttonText}>Inscrever-se</Text>
                </Pressable>
            </View>
        </View>
    );
};

const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    header: {
        height: 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        marginBottom: 12,
    },
    info: {
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tag: {
        fontSize: 12,
        color: '#888',
    },
    button: {
        backgroundColor: '#6200ee',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});


export default function Championships() {
    return(
        <ScrollView>
            <Card />
        </ScrollView>
    )
}