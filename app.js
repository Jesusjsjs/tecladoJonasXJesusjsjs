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
})

let result = "3"
const objectIdNumberValor = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const objectIdNumbers = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']


//Function callback
function leerButtonsNumbers( id ){//Esta function es para los Buttons Numbers
    let buttonId = document.getElementById( id );
    let indiceName = objectIdNumbers.indexOf( id );//Conseguimos la position del id para después usarlo y localizar su valor en objectIdNumberValor
    let valorMore = objectIdNumberValor[ indiceName ];//Conseguimos el valor
    console.log( valorMore );//Para pruebas xc

    buttonId.addEventListener( "click", function(){
        console.log(result);
            result = result + valorMore;//Sumamos el valor al principio.
            document.getElementById( 'resultado' ).innerHTML = result;//Actualizamos la pantalla con un nuevo valor jsjs
    }, true)                  
    return result;
}
function leerButtonPoint( id ){
    let resultParaRevisar = result.split('');
    document.getElementById( id ).addEventListener('click', function(){
        resultParaRevisar.forEach(element => {
            console.log(resultParaRevisar)
            existePoint = false;
            if(element == "."){
                existePoint = true;
                result = result + ".";
                document.getElementById( 'resultado' ).innerHTML = result;
            }
            else{
                existePoint = existePoint;
            }
            
            if(existePoint == true){
                alert('No puedes poner dos: .')
                console.log( existePoint )
            }
            else{
                result = result + ".";
                document.getElementById( 'resultado' ).innerHTML = result;
            }

        });
    }, true)
    return result;
}
function leerButtonsBorrar1( id ){

}
function leerButtonsBorrar2( id ){

}
function aceptar( id ){

}
function cancelar( id ){

}

