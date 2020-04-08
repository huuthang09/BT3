import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import renderItem from '../component/renderItem';
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Feed({navigation}) {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Nhạc Bất Quần',
      avatar:
        'https://media1.nguoiduatin.vn/media/luong-quoc-tiep/2019/06/04/kiem-hiep-kim-dung-chan-dung-nhan-vat-deu-nhat-vo-lam3.jpeg',
      title: 'Núi Hoa Sơn',
      price:'$79',
      image:
        'https://photo-3-baomoi.zadn.vn/w1000_r1/2019_04_23_318_30454469/f829839d62dd8b83d2cc.jpg',
      time: '3h',
      status:'posted'
    },
    {
      id: '2',
      name: 'Tả Lãnh Thiền',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBsgT8_UPAXIR0TrkexzqcHJfdIiK9Qh-4Ev_Q0hNiKwqeK7ez&usqp=CAU',
      title: 'Núi Tung Sơn',
      price:'$99',
      image:
        'https://www.dulichcongvu.com/uploads/Nui_Tung_Son.jpg',
      time: '2h',
      status:'shared'
    },

    {
      id: '3',
      name: 'Mạc Đại Tiên',
      avatar:
        'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/14264848_1112968852112861_1808624858613946920_n.jpg?_nc_cat=103&_nc_sid=2d5d41&_nc_oc=AQkIiLgp7Sy1vuWsacjERIEEV_jxnojS-HhJrwzMOz6G5_CRb8cP2go6yZffqZlEnWde-dffh8wWm1nlvQMZRlkV&_nc_ht=scontent.fvca1-1.fna&oh=a1459b2fda97a1b9f6ce3815368f5939&oe=5EB172EE',
      title: 'Núi Hành Sơn',
      price:'$79',
      image:
        'https://znews-photo.zadn.vn/w660/Uploaded/cqxrcajwp/2014_04_02/1_3.jpg',
      time: '2h',
      status:'shared'
    },

    {
      id: '4',
      name: 'Lệnh Hồ Xung',
      avatar:
        'http://streaming1.danviet.vn/upload/4-2018/images/2018-11-05/Lenh-Ho-Xung-Ly-a-Bang-thanh-con-no-vi-kinh-doanh-thua-lo-timg--2--1541385454-width1070height659.jpg',
      title: 'Núi Hằng Sơn',
      price:'$59',
      image:
        'http://lacviettravel.com.vn/wp-content/uploads/2016/05/nui-hang-son-trung-quoc.jpg',
      time: '2h',
      status:'shared'
    },

    {
      id: '5',
      name: 'Nhậm Ngã Hành',
      avatar:
        'https://i.ytimg.com/vi/sPz03dmRYWU/maxresdefault.jpg',
      title: 'Hắc Mộc Nhai',
      price:'$99',
      image:
        'https://3.bp.blogspot.com/-CCXDht2swV4/WiN3_ghRZEI/AAAAAAAABWI/nXNPSyDeSJs0R3o4fwcLSPB8j30E2mvawCLcBGAs/s1600/1.png',
      time: '2h',
      status:'shared'
    },
  ]);
  return (
    <View style={{flex:1}}>
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.filterContainer}
        onPress={() => navigation.navigate('Filters')}>
        <Image
            style={{width:60, height: 60}}
            source={require("../assets/feed/filter.png")}
            resizeMode="contain"
          />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: hp("10%"),
   alignSelf:'center'
  },
});
