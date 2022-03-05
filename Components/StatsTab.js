import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import data from '../metal.json'



export default function Bands({ navigation }) {
    let fans = 0
    let band_styles = []
    let countries = []

    for (let i = 0; i < data.length; i++) {
        if (!countries.includes(data[i].origin)) countries.push(data[i].origin)
        data[i].style.split(',').forEach(sty => {
            if (!band_styles.includes(sty)) band_styles.push(sty)
        })
        fans += data[i].fans
    }

    return (
        <SafeAreaView style={styles.view}>

            <View>
                <Text style={styles.title}>Metal 🤘</Text>
                <Text style={styles.description}>Count: {data.length}</Text>
                <Text style={styles.description}>Fans: {(fans * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
                <Text style={styles.description}>Countries: {countries.length}</Text>
                <Text style={styles.description}>Acitve: {data.filter(x => x.split == '-').length}</Text>
                <Text style={styles.description}>Split: {data.filter(x => x.split != '-').length}</Text>
                <Text style={styles.description}>Styles: {band_styles.length}</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold"
    },

    description: {
        textAlign: "center",
        fontSize: 18,
        color: "#fff"
    },


    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#000"
    },

});