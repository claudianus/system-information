// require('make-promises-safe')
// Require the framework and instantiate it
const fastify = require('fastify')()
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'assets'),
  prefix: '/assets/', // optional: default '/'
})

fastify.register(require('point-of-view'), {
  engine: {
    marko: require('marko')
  }
})

fastify.register(require('./routes'))

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`server listening on http://${fastify.server.address().address}:${fastify.server.address().port}/`)
})