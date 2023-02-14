

const http = require('http');


http.createServer((req, res) =>{
    // console.log(req);
    
    /* res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200,{'Content-Type': 'application/csv'}); */
    //res.writeHead(200,{'Content-Type': 'application/json'});

    /* res.write('id, nombre\n');
    res.write('1, Karina\n');
    res.write('2, Maria\n');
    res.write('3, Juan\n'); */
    res.write('Hola mundo');
    res.end();

    /* const persona ={
        id: 1,
        nombre: 'Karina '
    } */
    
    /* res.write(JSON.stringify(persona));      
    res.end();
 */
})
.listen( 8080);

console.log('Escuchando el puerto', 8080 );
