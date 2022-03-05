import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Cell from '../Cell'
import data from '../metal.json'



export default function Bands({ navigation }) {
    return (
        <SafeAreaView style={styles.view}>


            <FlatList
                style={styles.list}
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <Cell
                            title={item.band_name}
                            country={item.origin}
                            fans={item.fans}
                            year={item.formed}
                        />
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

    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    list: {
        color: "#000",
        flex: 1,
        width: "100%",
    },
});