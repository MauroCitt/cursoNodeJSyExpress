import fs, { read } from 'fs';
import readLine from 'readline';

export default file => {
    console.log('Evento')


let lines = 0

const rl = readLine.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity
})

rl.on('line', line => {
    ++lines
    console.log(`Numero total de caracteres por linea: ${line.length}`)
});

rl.on('close', () => console.log(`Numero total de lineas: ${lines}`))}
