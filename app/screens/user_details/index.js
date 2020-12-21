import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

function UserDetails({route, navigation}) {
  const [user, setUser] = useState(null);
  const userDetails = useSelector((state) => state.user.userDetails);

  useEffect(() => {
    const {userID} = route.params;  
    const filterArr = userDetails.filter((result) => result.id === userID);
    setUser(filterArr[0]);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: '2%',
      }}>
      <Text style={styles.header}>
        User Name: <Text style={styles.description}>{user?.username}</Text>
      </Text>
      <Text style={styles.header}>
        Full Name: <Text style={styles.description}>{user?.name}</Text>
      </Text>
      <Text style={styles.header}>
        Email: <Text style={styles.description}>{user?.email}</Text>
      </Text>
      <Text style={styles.header}>
        User Name: <Text style={styles.description}>{user?.website}</Text>
      </Text>
      <Text style={styles.header}>
        Company Name:{' '}
        <Text style={styles.description}>{user?.company?.name}</Text>
      </Text>
      <Text style={styles.header}>
        Tagline:{' '}
        <Text style={styles.description}>{user?.company?.catchPhrase}</Text>
      </Text>
      <Text style={styles.header}>
        Business: <Text style={styles.description}>{user?.company?.bs}</Text>
      </Text>
    </View>
  );
}

export default UserDetails;
