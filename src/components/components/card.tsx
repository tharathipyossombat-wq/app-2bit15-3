import { StyleSheet, Text, View,Image} from 'react-native';

type CardProps = { 
    id: number,
    name: string,
    image: string;
    price: number
}

export default function Card({ id, name, image, price }: CardProps){
    return (
        <View style={cardStyle.box}>
            <Image source={{ uri: image }} style={cardStyle.image}/>
            <Text>{name}</Text>
            <Text>{price}</Text>
            
       
        <View style={cardStyle.box2}>
                <Text>{price}</Text>
            </View>
   </View>    
    )
}

const cardStyle = StyleSheet.create({
    box: {
        backgroundColor: "pink",
        gap: 10,
        margin: 10,
        borderRadius: 16,
        padding: 10
    },
    image: {
        width: 100,
        height: 100
    },
    box2: {
        backgroundColor: "lightgreen",
        gap: 10,
        margin: 10,
        borderRadius: 16,
        padding: 10,
        textAlign: "right",
        fontSize: 140,


    },
})