import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, Button, Text, I18nManager, ImageBackground} from 'react-native';
import useFetchBooks from './useFetchBooks';
import { useNavigation } from '@react-navigation/native';



const BookItem = ({ book }) => (
  <View style={styles.bookItem}>
    <Text>{I18nManager.isRTL ? book.title_urdu : book.title}</Text>
  </View>
);

const Second = () => {
  const { books, loading, error } = useFetchBooks();
  const [searchQuery, setSearchQuery] = useState('');
  const [isRTL, setIsRTL] = useState(false);
  const navigation = useNavigation();

  /*const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 10);
*/
  const toggleRTL = () => {
    I18nManager.forceRTL(!isRTL);
    setIsRTL(!isRTL);
  };

  return (
    <View style={isRTL ? styles.containerRTL : styles.containerLTR}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a book..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Toggle RTL" onPress={toggleRTL} />
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error loading data</Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <BookItem book={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerLTR: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
  },
  containerRTL: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  bookItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Second;
