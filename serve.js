import config from './config';
import app from './app';

app.listen(config.port, () => {
  console.log(`${config.generator} listening on port ${config.port}`);
});
