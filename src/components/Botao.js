import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Label from './Label'

const Button = (props) => {
    const styleComponents = StyleSheet.create({
        TouchableOpacity: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            width: props.width,
            height: props.height,
            paddingTop: props.paddingTop,
        },
    });

    return (
        <TouchableOpacity style={styleComponents.TouchableOpacity} onPress={props.onPress}>
            <Icon name={props.name} size={props.iconSize} color={props.iconColor} />
            <Label value={props.value} color={props.color} fontSize={props.fontSize}  textAlign="center" justifyContent={props.justifyContent} alignItems={props.alignItems}/>
        </TouchableOpacity>
    );
};

export default Button;