const contactos = []

var nuevo_contacto = (contactos) => {
  var largo = contactos.length
  var objeto = {
    id:'',
    nombre:'',
    apellido:'',
    telefono:'',
    ubicación: {}
  }

  if (largo == 0) {
    objeto.id = 0
  } else {
    objeto.id = largo
  }
  objeto.nombre = prompt("Introduce el nombre");
  objeto.apellido = prompt("Introduce el apellido")
  objeto.telefono = prompt("Introduce el telefono")
  objeto.ubicación.ciudad = prompt("Introduce ciudad");
  objeto.ubicación.dirección = prompt("Introduce la dirección");
  contactos.push(objeto)
  console.log(contactos)
}

var eliminar_contacto = (contactos) => {
  var eliminar = parseInt(prompt("Introduce el n° del contacto que desee eliminar"))
  if (eliminar < 1){
    console.log("Indique un número correcto")
  } else {
    if (eliminar > contactos.length) {
      console.log("No se encuentra ese n° de contacto en la lista");
    } else {
      var confirmar = prompt(
          "Está seguro de eliminar a",
          contactos[eliminar-1].nombre,
          contactos[eliminar-1].apellido + "?",
          "\nIngrese 'SI' para confirmar."
        )
      if (confirmar == "SI") {
        contactos.splice(eliminar-1, 1);
      }
    }
  }
}

var imprimir = (contactos) => {
  for (i = 0; i < contactos.length; i++) {
    console.log(
      "Contacto n°",
      i + 1,
      "\nNombre:",
      contactos[i].nombre,
      contactos[i].apellido,
      "\nTeléfono:",
      contactos[i].telefono,
      "\nUbicacion:",
      contactos[i].ubicación.dirección+
      ",",
      contactos[i].ubicación.ciudad
    );
  }
}

var editar_contacto = (contactos) => {
  var editar = parseInt(prompt("Introduzca el n° del contacto que desee editar"))
  if (editar < 1){
    console.log("Indique un número correcto")
  } else {
    if (editar > contactos.length) {
      console.log("No se encuentra ese n° de contacto en la lista");
    } else {
      opciones = ["nombre", "apellido", "telefono", "dirección", "ciudad"]
      var opcion = prompt("¿Qué desea editar? Elija y escriba alguna de las siguientes opciones\n",opciones)
      if (opcion == "nombre" || opcion == "apellido" || opcion == "telefono") {
        contactos[editar-1][opcion] = prompt("Ingrese el nuevo valor")
      return contactos
      } else if (opcion == "ciudad" || opcion == "dirección"){
        contactos[editar-1].ubicación[opcion] = prompt("Ingrese el nuevo valor")
        return contactos
      }
      else {
        console.log("Ingrese un valor correcto");
        return contactos
      }
    }
  }
}

nuevo_contacto(contactos)
nuevo_contacto(contactos)
imprimir(contactos);
eliminar_contacto(contactos)
imprimir(contactos)