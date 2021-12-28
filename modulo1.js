let arrayParse = require('./app');
let appParseada= arrayParse();
console.log(appParseada);
/* let process = require('process');
let listar = process.argv[2];
let palabra1 = process.argv[3];
let palabra2 = process.argv[4];
let palabra3 = process.argv[5];
function letraCapital(palabra){
    palabra = palabra.toLowerCase();
    return palabra.replace(palabra[0], palabra[0].toUpperCase());
}

if (listar==undefined){
    listar='undefined';}
if (palabra1==undefined){
    palabra1='undefined';}
if (palabra2==undefined){
    palabra2='undefined';}
if (palabra3==undefined){
    palabra3='undefined';}
let listado = require('./funcionesDeTareas');

let aBm = listado(listar, palabra1 , palabra2);
function opciones(){
    switch (aBm){
    case 'agrega':
        if (palabra1!='undefined'&& palabra2!='undefined'){
            switch (palabra2.toLowerCase()){
                    case 'en':
                        
                        if (palabra3.toLowerCase()=='progreso'){
                            
                            appParseada.push({Titulo:letraCapital(palabra1), Estado:letraCapital(palabra2) + ' ' + palabra3.toLowerCase()})
                            
                            }
                        else{console.log('Debe escribir "progreso"');}
                        break
                    case 'pendiente':
                    case 'terminada':
                        appParseada.push({Titulo:letraCapital(palabra1), Estado:letraCapital(palabra2)})
                        break
                    default:
                        console.log('Debe ingresar solo "pendiente" o "terminada" o "en progreso"');}  }             
        else {console.log('Titulo y Estado deben existir, si va a agregar'); }
    break
    case 'elimina':
        appParseada.pop();
        break
    case 'modifica':
        
        if (palabra1 != 'undefined'){
            for (i=0; i<appParseada.length;i++){
                if (appParseada[i].Titulo==letraCapital(palabra1)){
                    appParseada[i].Titulo=letraCapital(palabra2);   }
                else {var ban=false;}
            }
            if (ban==false){console.log('Titulo no encontrado');}
        }
        else { console.log('Al modificar escriba el titulo que busca y luego el titulo a cambiar');}
        break
}
return appParseada();
}
; */
//module.exports=opciones;
//console.log(arrayParse());