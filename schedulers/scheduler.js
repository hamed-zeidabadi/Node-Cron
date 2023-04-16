const cron = require("node-cron");
const { resolve } = require("path");

module.exports = {
  initCorns: (config) => {
    Object.keys(config).forEach((key) => {
      if (cron.validate(config[key].time)) {
        cron.schedule(config[key].time, () => {
          const handler = require(`${config[key].handler}`);
          handler();
        });
      }
    });
  },
};
