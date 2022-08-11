const chalk = require('chalk');
const {app} = require('./app');

const PORT = process.env['PORT'] ?? 3001;


app.listen(PORT, async () => {
  console.log(
    chalk.blueBright('Server is listening on PORT:'),
    chalk.yellow(PORT),
    chalk.blueBright('Get your shopping on!')
  );
});
