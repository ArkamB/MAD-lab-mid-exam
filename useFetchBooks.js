import { useState, useEffect } from 'react';
import booksData from './Books';

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = () => {
      try {
        // Simulating an API call to fetch data from local JSON
        setBooks(booksData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error };
};

export default useFetchBooks;
