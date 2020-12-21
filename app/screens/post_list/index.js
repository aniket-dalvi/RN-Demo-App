import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import UserDetailsActions from '../../store/actions/UserDetailsActions';
import ActivityIndicatorComp from '../../components/activity_indicator';
import styles from './styles';
import fetchAPI from '../../utils/api';

function filterUsername(data, id) {
  const filterArr = data.filter((result) => result.id === id);
  return filterArr[0].username;
}

function PostList({navigation}) {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const setUserDetails = (data) =>
    dispatch(UserDetailsActions.setUserData(data));
  const userDetails = useSelector((state) => state.user.userDetails);

  useEffect(() => {
    fetchAPI('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setLoading(false);
        setPostList(res);
      })
      .catch((e) => {
        console.log(e.message);
      });

    fetchAPI('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setLoading(false);
        setUserDetails(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const renderItem = ({item}) => {
    const userName =
      userDetails.length && filterUsername(userDetails, item.userId);
    return (
      <TouchableOpacity
        style={styles.postCard}
        onPress={() =>
          navigation.navigate('PostView', {id: item.id, userName: userName})
        }>
        <Text style={styles.postCardTitle}>
          Title: <Text style={styles.postCardDesc}>{item.title}</Text>
        </Text>
        <Text style={styles.postCardTitle}>
          Post Creator:
          <Text
            style={[
              styles.postCardDesc,
              {color: 'blue', textDecorationLine: 'underline'},
            ]}
            onPress={() =>
              navigation.navigate('UserDetails', {userID: item.userId})
            }>
            {userName}
          </Text>
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicatorComp />
      ) : (
        <FlatList
          data={postList}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </View>
  );
}

export default PostList;
