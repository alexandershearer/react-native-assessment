import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Cell from '../Cell'
import data from '../metal.json'



export default function Styles({ navigation }) {
    const filteredStyles = []

    for (let i = 0; i < data.length; i++) {
        const band_styles = data[i].style.split(',')
        band_styles.forEach(sty => {
            if (!filteredStyles.includes(sty)) filteredStyles.push(sty)
        })
    }


    return (
        <SafeAreaView style={styles.view}>
            <FlatList
                style={styles.list}
                data={filteredStyles}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.item_view}>
                            <Text style={styles.item}>{item}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: "#fff",
        textDecorationLine: 'underline'
    },

    item: {
        fontSize: 24,
        padding: 7,
        color: "#fff",
        borderBottomWidth: 2,
        borderBottomColor: "#999"
    },

    item_view: {
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#999"
    },

    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000"
    },

    list: {
        color: "#000",
        flex: 1,
        width: "100%",
        padding: 7,
    },
});