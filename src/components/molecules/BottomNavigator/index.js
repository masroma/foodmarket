import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconHome, IconHomeActive, IconOrder, IconOrderActive, IconProfile, IconProfileActive } from '../../../assets';


const Icon = ({label, focus}) => {
    switch(label){
        case 'Home':
            return focus ? <IconHomeActive/> : <IconHome/>;
        case 'Order':
            return focus ? <IconOrderActive/> : <IconOrder/>;
        case 'Profile':
            return focus ? <IconProfileActive/> : <IconProfile/>;
        default :
        return <IconHomeActive/>
    }
   
}
const BottomNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress} >
                            <Icon label={label} focus={isFocused} />
                        {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {label}
                        </Text> */}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container:{ flexDirection: 'row', backgroundColor:'white', paddingHorizontal:40, paddingTop:15, paddingBottom:13, justifyContent:'space-between' }
})