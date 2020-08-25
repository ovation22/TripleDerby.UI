import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Router from './components/Router';
import routes from './constants/routes';
import ScrollToTop from './components/ScrollToTop';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  container: {
    padding: 0,
  },
}));

const sections = [
  { title: routes.root.name, url: routes.root.path },
  { title: routes.breed.name, url: routes.breed.path },
  { title: routes.race.name, url: routes.race.path },
  { title: routes.train.name, url: routes.train.path },
];

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <ScrollToTop />
      <CssBaseline />
      <Container maxWidth={false} className={classes.container}>
        <Header sections={sections} />
        <div className={classes.offset} />
        <main>
          <Router />
        </main>
      </Container>
    </>
  );
}
