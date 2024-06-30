import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
    return 'Ce tá aí ainda'
})

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server is running!')
})