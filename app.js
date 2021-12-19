document.addEventListener("DOMContentLoaded", ()=>{

    leerButtonPoint('point')
    leerButtonsNumbers('zero');
    leerButtonsNumbers('one');
    leerButtonsNumbers('two');
    leerButtonsNumbers('three');
    leerButtonsNumbers('four');
    leerButtonsNumbers('five');
    leerButtonsNumbers('six');
    leerButtonsNumbers('seven');
    leerButtonsNumbers('eight');
    leerButtonsNumbers('nine');
    leerButtonsBorrar2('deleteAll');
    leerButtonsBorrar1('deleteOne');
})
//Usaremos todas estas variables para nuestras functions siguientes.
let result = ""
const objectIdNumberValor = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const objectIdNumbers = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let existePoint = false;

//Function callback
function leerButtonsNumbers( id ){//Esta function es para los Buttons Numbers
    let buttonId = document.getElementById( id );
    let indiceName = objectIdNumbers.indexOf( id );//Conseguimos la position del id para después usarlo y localizar su valor en objectIdNumberValor
    let valorMore = objectIdNumberValor[ indiceName ];//Conseguimos el valor

    buttonId.addEventListener( "click", function(){
            result = result + valorMore;//Sumamos el valor al principio.
            document.getElementById( 'resultado' ).innerHTML = result;//Actualizamos la pantalla con un nuevo valor jsjs
    }, true)                  
    return result;
}
function leerButtonPoint( id ){
    document.getElementById( id ).addEventListener('click', function(){
        //Decidimos si sumar o no el . a nuestro resultado, en función si exite o no un punto.
        if(existePoint == true){
            alert('No puedes poner dos: .')
        }
        else{
            result = result + ".";
            document.getElementById( 'resultado' ).innerHTML = result;
            return existePoint = true;
        } 
    }, true)
    return result;
}
function leerButtonsBorrar1( id ){
    
    document.getElementById( id ).addEventListener('click', function(){
        lastStr = result.charAt( result.length-1 );
        
        if( lastStr == "." ){ 
            existePoint = false;
            result = result.substring(0, result.length - 1);
            document.getElementById( 'resultado' ).innerHTML = result;
        }
        else{
            result = result.substring(0, result.length - 1);
            document.getElementById( 'resultado' ).innerHTML = result;
        }        

    })
    return [result, existePoint];

}
function leerButtonsBorrar2( id ){
    document.getElementById( id ).addEventListener('click', function(){
        result = '';
        existePoint = false;//Volvemos a signar false a existe point for can write points
        document.getElementById( 'resultado' ).innerHTML = result;
    })
    return result;
}
function aceptar( id ){

}
function cancelar( id ){

}

