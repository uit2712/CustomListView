import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import ListHeroes from './data/MockListHeroes';
import ListViewItem from './ListViewItem';

export default class ListView extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            heroes: this.props.heroes
        }
    }

    showListView() {
        let result;
        result = this.state.heroes.map((hero: Hero, key: any) => {
            return <ListViewItem hero={hero} key={key}/>
        });

        return result;
    }

    render() {
        return (
            <ScrollView style={styles.listViewContainer}>
                {this.showListView()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    listViewContainer: {
        flex: 1
    }
});