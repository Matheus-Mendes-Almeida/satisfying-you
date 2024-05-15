import { Text, StyleSheet } from 'react-native'

const Label = (props) => {
    const styleComponents = StyleSheet.create({
        Texto: {
            color: props.color,
            paddingTop: props.paddingTop,
            paddingBottom: props.paddingBottom,
            fontFamily: 'AveriaLibre-Regular',
            fontSize: props.fontSize,
            textAlign: props.textAlign,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            marginTop: props.marginTop,
        },
    })
    return (
        <>
            <Text numberOfLines={props.numberOfLines} style={styleComponents.Texto}>{props.value}</Text>
        </>
    )
}

export default Label