import fs, { read } from 'fs';

export default file => {
    console.log('Asíncrono')

let lines = 0

fs.readFile(file, (err, contents) => {
    if (err) {
        return console.log(err);
    } 

    const lines = contents.toString().split('\n');

    for (const line of lines) {
        console.log(`Numero de caracteres por linea: ${line.length}`)
    }

    console.log(`Número total de lineas: ${lines.length}`);
})

console.log(`Fichero seleccionado: ${file}`);
}
