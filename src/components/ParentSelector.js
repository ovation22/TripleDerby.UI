import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import endpoints from '../constants/endpoints';
import { trackException } from '../services/telemetry.service';
import ErrorSnackbar from './ErrorSnackbar';

export default function ParentSelector() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [parents, setParents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.dams);
        const result = await response.json();
        setParents(result);
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
        {!isLoaded ? <CircularProgress /> : parents.length}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
