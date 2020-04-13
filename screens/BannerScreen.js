
import { View, Text, Button, StyleSheet } from 'react-native';
import  {Card} from 'react-native-paper';
import React, { Component } from 'react';



export default class BannerScreen extends Component {

    render() {
        console.log(this.props.navigation)
        return (
            <View style={styles.container}>
                <Text>Banner Screen</Text>
                <Button
                    title="Go to details screen"
                    onPress={() => this.props.navigation.navigate("Details")}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});