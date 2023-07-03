const amqp = require('amqplib')

const sendMessage = async (req, res, next) => {
    try {
        const connection = await amqp.connect('amqp://localhost')
        const channel = await connection.createChannel()
        await channel.assertQueue('response_channel', {durable: true})

        const message = `Nova requisição: ${req.method} ${req.originalUrl}`;
        channel.sendToQueue('response_channel', Buffer.from(message));
        console.log(`Mensagem enviada para a fila: ${message}`);
        setTimeout(() => {
            connection.close();
        }, 500);
    } catch (error) {
        console.log(error)
    }

    next()
}

const consumeMessage = async (req, res, next) => {
    try {
        const connection = await amqp.connect('amqp://localhost')
        const channel = await connection.createChannel()
        await channel.assertQueue('response_channel', {durable: true})

        channel.consume('response_channel', (message) => {
            console.log(`Mensagem recebida da fila: ${message.content.toString()}`);
            channel.ack(message);
        });
        console.log('Aguardando mensagens da fila. Para sair, pressione CTRL+C.');
    } catch (error) {
        console.error(error)
    }

    next()
}

module.exports = {
    sendMessage,
    consumeMessage
}