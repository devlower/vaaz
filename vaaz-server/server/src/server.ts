import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.get('/', async () => {
    const plants = await prisma.plant.findMany({
        where: {
            name: {
                startsWith: 'R'
            }
        }
    })

    return plants
})

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server is running!')
})