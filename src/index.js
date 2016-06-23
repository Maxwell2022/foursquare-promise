import Venue from './resources/venue';

export default function (config) {
  const requiredOptions = ['id', 'secret', 'redirectUrl'];
  requiredOptions.forEach(option => {
    if (!config[option]) {
      throw new Error(`config.${option} is required`);
    }
  });

  return {
    venues: new Venue(config),
  };
}
