const config = {
  hello: {
    name: "sayHello",
    time: "*/10 * * * * *",
    handler: "./handlers/sayHello",
  },
  bye: { name: "sayBye", time: "*/20 * * * * *", handler: "./handlers/sayBye" },
};

module.exports = config;
