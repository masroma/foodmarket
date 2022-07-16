import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Gap, ProfileTabSection } from '../../components'
import { pic_profile } from '../../assets';

const Profile = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      <Gap height={24}/>
      <Gap height={24}/>
      <View style={styles.photo}>
        <View style={styles.borderPhoto}>
          <View style={styles.photoContainer}>
          {isEmpty ? <Text style={styles.addPhoto}>Add</Text> : <Image style={styles.photoprofile} source={pic_profile}/>}
          </View>
        </View>
      </View>
      <Gap height={10}/>
      <View style={styles.profiledata}>
        <Text style={styles.nama}>Mariana utami</Text>
        <Text style={styles.email}>mariana@alapesta.com</Text>
      </View>
      <Gap height={24}/>
      <View style={styles.tab}>
        <ProfileTabSection/>
      </View>
    </View>
  )
}

export default Profile
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  photoContainer: { width: 70, height: 70, borderRadius: 70, backgroundColor: '#F0F0F0', padding: 24, justifyContent:'center',alignItems:'center' },
  borderPhoto: { borderWidth: 1, borderColor: '#8D92A3', width: 80, height: 80, borderRadius: 80, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center' },
  photo: { alignItems: 'center', marginTop: 26, marginBottom: 16 },
  addPhoto:{fontSize:10, fontFamily:'Poppins-Light', color:'#8D92A3', textAlign:'center'},
  profiledata:{alignItems:'center'},
  photoprofile:{width:70, height:70, borderRadius: 70},
  nama:{fontSize:18,fontFamily:'Poppins-Medium', color:'#020202'},
  email:{fontSize:14,fontFamily:'Poppins-Light', color:'#8D92A3'},
  tab:{flex:1}
})