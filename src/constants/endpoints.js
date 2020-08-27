import config from './config';

const rootRoute = `${config.api}/api`;

export default {
  breeding: `${rootRoute}/Breeding/`,
  dams: `${rootRoute}/Breeding/Dams`,
  feedings: `${rootRoute}/Feedings/`,
  horses: `${rootRoute}/Horses/`,
  races: `${rootRoute}/Races/`,
  trainings: `${rootRoute}/Trainings/`,
};
