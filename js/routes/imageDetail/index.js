// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Share from 'react-native-share';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CatImage from 'DoOfflineFirstApps/js/components/CatImage';
import Button from 'DoOfflineFirstApps/js/components/Button';
import type { Navigation } from 'DoOfflineFirstApps/js/types';
import { toggleLike } from 'DoOfflineFirstApps/js/services/images/thunks';
import { reportImage, removeImage } from 'DoOfflineFirstApps/js/services/images/actions';

type Props = {
    navigation: Navigation,
    onLikePress: () => void,
    onReportPress: () => void,
    removeImage: () => void,
};

class ImageDetailScreen extends Component<void, Props, void> {
    static navigationOptions = {
        title: 'See a cat',
    };

    handleAppShare = () => {
        Share
            .open({
                url: 'https://github.com/Osedea/react-native-offline-first-example',
                message: 'Loving cats? Download me!',
            })
            .catch((error: Error) => {
                console.log('Damn user, he did something wrong again...', error);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <CatImage
                    {...this.props.navigation.state.params}
                    onLikePress={this.props.onLikePress}
                    onReportPress={this.props.onReportPress}
                    removeImage={this.props.removeImage}
                    big
                />
                <Button
                    text={'Share the 💞'}
                    onPress={this.handleAppShare}
                />
            </View>
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            onLikePress: toggleLike,
            onReportPress: reportImage,
            removeImage,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetailScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
