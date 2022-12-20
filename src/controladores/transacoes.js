let { contas, saques, depositos, transferencias } = require('../bancodedados/bancodedados');

const { format } = require('date-fns')


const depositar = (req, res) => {
    const { numero_conta, valor } = req.body;

    if (!numero_conta || !valor) {
        return res.status(400).json({ mensagem: 'O numero do conta e o valor sao obrigatórios' })
    }

    const contaEncontrada = contas.find(conta => Number(conta.numero) === Number(numero_conta))


    if (!contaEncontrada) {
        return res.status(404).json({ mensagem: 'Conta nao encontrada' })
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'O valor nao pode ser igual ou menor que zero' })
    }
    contaEncontrada.saldo += valor;

    const registro = {
        data: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        numero_conta,
        valor
    }
    depositos.push(registro)
    return res.status(201).send()

}


const sacar = (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    if (!numero_conta || !valor || !senha) {
        return res.status(400).json({ mensagem: 'O numero do conta, a senha e o valor sao obrigatórios' })
    }

    const contaEncontrada = contas.find(conta => Number(conta.numero) === Number(numero_conta))


    if (!contaEncontrada) {
        return res.status(404).json({ mensagem: 'Conta nao encontrada' })
    }
    if (contaEncontrada.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'Senha inválida' })
    }

    if (contaEncontrada.saldo < valor) {
        return res.status(400).json({ mensagem: 'O saldo é insuficiente' })
    }
    contaEncontrada.saldo -= valor;

    const registro = {
        data: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        numero_conta,
        valor,
        senha
    }
    saques.push(registro)
    return res.status(201).send()

}

const transferir = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if (!valor || !numero_conta_origem || !numero_conta_destino || !senha) {
        return res.status(400).json({ mensagem: 'O numero do conta_origem, o numero_conta_destino, a senha e o valor sao obrigatórios' })
    }
    const contaEncontradaOrigem = contas.find(conta => Number(conta.numero) === Number(numero_conta_origem))


    if (!contaEncontradaOrigem) {
        return res.status(404).json({ mensagem: 'Conta de origem não encontrada' })
    }
    const contaEncontradaDestino = contas.find(conta => Number(conta.numero) === Number(numero_conta_destino))


    if (!contaEncontradaDestino) {
        return res.status(404).json({ mensagem: 'Conta de destino não encontrada' })
    }

    if (contaEncontradaOrigem.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'Senha inválida' })
    }
    if (contaEncontradaOrigem.saldo < valor) {
        return res.status(400).json({ mensagem: 'O saldo é insuficiente' })
    }
    contaEncontradaOrigem.saldo -= valor
    contaEncontradaDestino.saldo += valor

    const registro = {
        data: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        numero_conta_origem,
        numero_conta_destino,
        valor,
        senha
    }
    transferencias.push(registro)
    return res.status(201).send()

}


module.exports = {
    depositar,
    sacar,
    transferir
}