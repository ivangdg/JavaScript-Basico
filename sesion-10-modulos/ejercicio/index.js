import chalk  from 'chalk'

import * as funcionesMatematicas from './modulos/controller.js'
console.log(funcionesMatematicas)

const sum = funcionesMatematicas.suma(1,2)
console.log(sum)

const multi = funcionesMatematicas.multiplica(4,5)
console.log(chalk.green.bold(multi))
