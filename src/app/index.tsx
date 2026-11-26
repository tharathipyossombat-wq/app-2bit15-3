import { FlatList, Text, View } from 'react-native'

import producte from '../products.json'

import Card from '@/components/components/card'

export default function App(){
  return(
     <View>
      <Text>รายการสินค้า</Text>

      <FlatList
      // ข้อมูลที่จะเรนเดอร์
      data={producte}

      // คีย์หลัก
      keyExtractor={(item) => item.id.toString()}

      // component ที่จะแสดงผล
      renderItem={({item}) => (
        <Card 
        id={item.id}
        name={item.name} 
        image={item.image}
        price={item.price}
        />
      )}

      />

    </View>
    )}