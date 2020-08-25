import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React, { useEffect, useState } from 'react';
import ErrorSnackbar from '../components/ErrorSnackbar';
import endpoints from '../constants/endpoints';
import { trackException } from '../services/telemetry.service';

export default function Train() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(endpoints.trainings)
        .then(res => res.json())
        .then(
          result => {
            const s = result.map(x => ({
              ...x,
            }));
            setTrains(s);
            setLoaded(true);
          },
          e => {
            setError(e);
            setLoaded(true);
            trackException(e);
          },
        );
    };
    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : trains.length}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
