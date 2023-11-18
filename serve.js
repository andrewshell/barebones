import config from './config.js';
import app from './app.js';

app.listen(config.port, () => {
  console.log(`${config.generator} listening on port ${config.port}`);
});
