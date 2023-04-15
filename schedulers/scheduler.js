const cron = require("node-cron");
const { resolve } = require("path");

module.exports = {
  initCorns: (config) => {
    Object.keys(config).forEach((key) => {
      console.log("cron run ..", Math.random());
      if (cron.validate(config[key].time)) {
        console.log("if cron run ..", Math.random());
        cron.schedule(config[key].time, () => {
          console.log("schedule cron run ..", Math.random());
          const handler = require(resolve(config[key].handler));
          handler();
        });
      }
    });
  },
};
