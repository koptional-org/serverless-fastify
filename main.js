const fastifyImp = require("fastify");
const fastify = fastifyImp({
  logger: true
});
fastify.get("/", async (request, reply) => {
  // Some sort of request validation
  reply.send({ text: "Hello, " + (request.query.name || "Friend") });
});

module.exports = fastify;
