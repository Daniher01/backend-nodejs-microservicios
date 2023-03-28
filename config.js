module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secreto'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'sql10.freemysqlhosting.net',
        user: process.env.MYSQL_USER || 'sql10609331',
        password: process.env.MYSQL_PASSWORD || 'dyeSuRPhbY',
        database: process.env.MYSQL_DATABASE || 'sql10609331', 
    }
}