const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'GEnera un archivo con la tabla de Multiplicar', opts)
    .help()
    .argv;

module.exports = {
        argv
    }
    //como el body del args es igual se ccrea un acontante
    /*
    const argv = require('yargs')
        .command('listar', 'imprime en consola la tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limite: {
                alias: 'l',
                default: 10
            }
        })
        .command('crear', 'GEnera un archivo con la tabla de Multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limite: {
                alias: 'l',
                default: 10
            }
        })
        .help()
        .argv;*/