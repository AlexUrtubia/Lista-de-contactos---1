const contactos = ["Alex Urtubia", "Victoria Ulloa", "David Contreras", "Catalina Cabezas"];

var nuevo_contacto = (contactos, nuevo) => {
    nuevo.toString();
    contactos.push(nuevo);
}

var eliminar_contacto = (contactos, eliminar) => {
  const indice = contactos.indexOf(eliminar);
  console.log(indice);
  if (indice === -1) {
    console.log("No se encuentra ese contacto en la lista");
  } else {
    contactos.splice(indice, 1);
  }
}

var imprimir = (contactos) => {
  console.log(contactos)
}


nuevo_contacto(contactos, "Juan Silva")
imprimir(contactos);
eliminar_contacto(contactos, "David Contreras")
imprimir(contactos)