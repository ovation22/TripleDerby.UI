import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    textAlign: 'left',
  },
  cardTitle: {
    textAlign: 'center',
  },
  cardMedia: {
    height: 280,
  },
  cardLocation: {
    height: 20,
    verticalAlign: 'middle',
    margin: theme.spacing(2, 0),
  },
  cardLocationIcon: {
    height: 20,
    verticalAlign: 'middle',
  },
  cardDetail: {
    height: 145,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardViewProfile: {
    marginLeft: 'auto',
  },
}));

export default function FeaturedItem({ item, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} {...rest}>
      <CardActionArea>
        <CardContent>
          <Typography component="h2" variant="h5" className={classes.cardTitle}>
            {item.name}
          </Typography>
          <Typography variant="subtitle1" paragraph className={classes.cardDetail}>
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>Tada!</CardActions>
    </Card>
  );
}

FeaturedItem.defaultProps = {
  item: null,
};

FeaturedItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};
