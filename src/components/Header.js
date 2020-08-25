import React from 'react';
import * as PropTypes from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import routes from '../constants/routes';

const useStyles = makeStyles(theme => ({
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontSize: '16px',
    transition: '0.3s',
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    overflow: 'hidden',
  },
  speaker: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  navSection: {
    marginLeft: 'auto',
  },
  search: {
    display: 'inline',
  },
  active: {
    color: theme.palette.primary.main,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.defaultProps = {
  window: null,
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <HideOnScroll {...props}>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar} id="back-to-top-anchor" role="menu">
            <Link to={routes.root.path} component={RouterLink}>
              Logo
            </Link>

            <Typography component="span" className={classes.navSection}>
              <Hidden smDown>
                {sections.map((section, i) => (
                  <Link
                    key={section.title}
                    variant="inherit"
                    to={section.url}
                    className={classes.toolbarLink}
                    component={NavLink}
                    activeClassName={classes.active}
                    exact={i === 0}
                  >
                    {section.title}
                  </Link>
                ))}
              </Hidden>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

Header.defaultProps = {
  sections: PropTypes.array,
};

Header.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape()),
};
