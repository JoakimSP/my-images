import Prisma  from '../../lib/prisma'

export default function handle(req, res) {
        const {category, query} = req.body
        res.status(200).json({category, query})
}

