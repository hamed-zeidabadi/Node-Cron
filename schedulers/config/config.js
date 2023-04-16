const config = {
  hello: { time: "*/10 * * * * *", handler: "./handlers/sayHello" },
  bye: { time: "*/10 * * * * *", handler: "./handlers/sayBye" },
};

module.exports = config;
