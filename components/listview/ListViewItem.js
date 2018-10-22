import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

export default class ListViewItem extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            hero: this.props.hero // we receive data from props, which is sent from component ListView
        };
    }

    render() {
        if(this.state.hero != null)
            return (
                <TouchableOpacity style={styles.listViewItemContainer}>
                    <Image source={this.state.hero.avatar} style={styles.avatar}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{this.state.hero.name}</Text>
                        <Text style={[styles.superpower, styles.text]}>{this.state.hero.superpower}</Text>
                    </View>
                </TouchableOpacity>
            )
        else return null;
    }
}

const styles = StyleSheet.create({
    listViewItemContainer: {
        flexDirection: 'row',
        margin: 20
    },
    info: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    text: {
        fontSize: 15
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});