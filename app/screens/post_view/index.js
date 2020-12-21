import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import ActivityIndicatorComp from '../../components/activity_indicator';
import fetchAPI from '../../utils/api';
import styles from './styles';

function commentCards(data) {
  return data.map((data) => (
    <View key={data.id} style={styles.commentWrapper}>
      <Text style={styles.header}>
        Email: <Text style={styles.description}>{data.email}</Text>
      </Text>
      <Text style={styles.header}>
        Name: <Text style={styles.description}>{data.name}</Text>
      </Text>
      <Text style={styles.header}>
        Comment: <Text style={styles.description}>{data.body}</Text>
      </Text>
    </View>
  ));
}

function PostView({route, navigation}) {
  const [postData, setPostData] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {id} = route.params;
    fetchAPI(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => {
        setLoading(false);
        setPostData(result);
      })
      .catch((error) => console.log(error.message));

    fetchAPI(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((result) => {
        setLoading(false);
        setComments(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return loading ? (
    <ActivityIndicatorComp />
  ) : (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Title: <Text style={styles.description}>{postData.title}</Text>
      </Text>
      <Text style={styles.header}>
        Creators Username:{' '}
        <Text style={styles.description}>{route.params.userName}</Text>
      </Text>

      <Text style={styles.header}>Comments: </Text>
      {commentCards(comments)}
    </ScrollView>
  );
}

export default PostView;
