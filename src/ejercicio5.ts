let posición: number = Number(prompt("Ingrese la posición de la carrera"));
if (posición === 1) {
  console.log("Felicitaciones!!! obtuvo la Medalla de oro");
} else {
  if (posición === 2) {
    console.log("felicitaciones!!!obtuvo la Medalla de Plata ");
  } else {
    if (posición === 3) {
      console.log("Felicitaciones!!! obtuvo la Medalla de Bronce");
    } else {
      console.log("Felicitaciones!!!, obtuvo un certificado de participación");
    }
  }
}
