import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React, { useEffect, useState } from 'react';
import ErrorSnackbar from '../components/ErrorSnackbar';
import endpoints from '../constants/endpoints';
import { trackException } from '../services/telemetry.service';
import ResultList from '../components/ResultList';

export default function Train() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.trainings);
        const result = await response.json();
        setTrainings(result);
      } catch (e) {
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={trainings} />}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
