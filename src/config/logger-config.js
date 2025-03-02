const { createLogger, format, transports, level } = require('winston');
const { combine, timestamp, label, printf } = format;

const customeFormat = printf(({ message, timestamp }) => {
    return `${timestamp} : ${level} : ${message}`;
})

const logger = createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        customeFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combines.log' })
    ],
})

module.exports = logger;