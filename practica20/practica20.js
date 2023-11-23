'user strc'

function validarTaxi(automovil){
    let currentYear=2015;
    let year= currentYear-automovil.yearFabricacion;

    if(year<=10){
        return(true);
    }
    else {
        return(false);
    }
}



let vehiculo={
    brand: "Nissan",
    model: "Versa",
    yearFabricacion: 2015,
    color: "red",

};


let result= validarTaxi(vehiculo)
alert("El resultado de su vehiculo para ser aprobado como taxi es: "+result);