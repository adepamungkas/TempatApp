import {
    View, Image, Text, Button, StyleSheet, SafeAreaView, ScrollView, Dimensions,
    Alert,
    TouchableOpacity
} from 'react-native';
import {Card, Badge, Banner, Divider, List} from 'react-native-paper';
import React, {Component} from 'react';
import {
    getBranchName,
    getRating_score,
    getFacilities,
    getPrice_min,
    getPrice_max,
    getOperational_hours
} from './data/MockDataAPI';
import Icon from 'react-native-vector-icons/Ionicons';

var {width, height} = Dimensions.get('window');

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            branchName: getBranchName(),
            facilities: getFacilities(),
            priceMin: getPrice_min(),
            priceMax: getPrice_max(),
            operational_hours: getOperational_hours(),
            rating: getRating_score(),
            expanded: true
        };
    }


    render() {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Card>
                        <Card.Cover source={require('./asset/sample-house.png')}/>
                    </Card>
                    <Text style={styles.headerText}>
                        {this.state.branchName}
                    </Text>


                    <Divider style={styles.divider}/>
                    <View style={styles.rateScore}>
                        <Badge
                            style={styles.badge}>Rating: {this.state.rating}</Badge>
                    </View>
                    <Divider style={styles.divider}/>
                    <View style={styles.titleText}>
                        <View>
                            <Text style={styles.titleText}>Jam Operasional</Text>
                        </View>
                                {this.state.operational_hours.map((item) => {
                                    var hari

                                    switch (item.day) {
                                        case 0:
                                            hari="minggu"
                                            break;
                                        case 1:
                                            hari="Senin"
                                            break;
                                        case 2:
                                            hari="Selasa"
                                            break;
                                        case 3:
                                            hari="Rabu"
                                            break;
                                        case 4:
                                            hari="Kamis"
                                            break;
                                        case 5:
                                            hari="Jumat"
                                            break;
                                        case 6:
                                            hari="Sabtu"
                                    }
                                    return (
                                        <Text key={item.id}>
                                            {hari} : {item.hour_start} WIB - {item.hour_end} WIB </Text>

                                    );
                                })}



                    </View>
                    <Divider style={styles.divider}/>
                    <View style={styles.fixToText}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('Left button pressed')}
                        >
                            <Text style={styles.titleText}>Tentang</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('Left button pressed')}
                        >
                            <Text style={styles.titleText}>Menu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('Left button pressed')}
                        >
                            <Text style={styles.titleText}>Ulasan</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={styles.divider}/>
                    <View style={styles.caption}>
                        <Text>Rata-Rata Harga</Text>

                    </View>
                    <View style={styles.text}>
                        <Text>Rp. {this.state.priceMin} - Rp. {this.state.priceMax}</Text>

                    </View>
                    <Divider style={styles.divider}/>
                    <View style={styles.caption}>
                        <Text>Facilitas</Text>
                    </View>
                    <View style={styles.facilityMenu}>

                        {this.state.facilities.map((item) => {
                            return (

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => Alert.alert('Left button pressed')}
                                    key={item.id}
                                >
                                    <Image source={{uri: `${item.image_url}`}} style={{width: 20, height: 20}}/>

                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <Divider style={styles.divider}/>
                    <Text style={styles.text}>
                        Masuk ke halaman "My Booking" dan pilih Deals yang ada pada "Upcoming Booking"

                    </Text>
                    <Text style={styles.text}>
                        Buka dan perlihatkan Booking Code kamu kepada staff restoran.

                    </Text>
                    <Text style={styles.text}>
                        Hanya berlaku terhadap timeslot yang ada dan produk yang telah dipesan.

                    </Text>
                    <Text style={styles.text}>
                        User harus hadir pada saat redemption
                    </Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}



export default HomeScreen;


const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderColor: 'black',
    },
    baseText: {
        fontFamily: "Cochin"
    },
    container: {
        flex: 1,

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    facilityMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,

    },
    caption:{
        marginTop: 5,
        marginBottom: 5,
        fontSize: 14,
        lineHeight: 14,
    },
    divider: {
        backgroundColor: 'black',
    },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 3,
    },
    text: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5,
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    rateScore: {
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    badge: {
        backgroundColor: 'yellow',
        alignItems: 'center',
    }
});