
//Variables globales
var respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9,
  respuesta10, respuesta11, respuesta12, respuesta13, respuesta14, respuesta15, respuesta16, respuesta17, respuesta18,
  respuesta19, respuesta20, respuesta21, respuesta22, respuesta23, respuesta24, respuesta25, respuesta26, respuesta27,
  respuesta28, respuesta29, respuesta30, respuesta31, folio;

//Folio
function guardarFolio(value) {
  folio = value.target.value
}

//Respuesta 1
function respuestaUno(evt) {
  respuesta1 = document.getElementById(evt.target.id).value 
}

//Respuesta 2
function respuestaDos(value) {
  var validar = value.target.value
  if( validar >= 0){
    respuesta2 = validar
  }else{
    alert ("Por favor ingrese un numero mayor a 0");
  }
  
}

//Respuesta 3
function respuestaTres(value) {
  var validar = value.target.value  
  if( validar >= 0){
  respuesta3 = validar
  }else{
    alert ("Por favor ingrese un numero mayor a 0");
  }
}

//Respuesta 4
function respuestaCuatro(value) {
  var validar = value.target.value
  if( validar >= 0){
    respuesta4 = validar
  }else{
    alert ("Por favor ingrese un numero mayor a 0");
  }
}

//Respuesta 5
function respuestaCinco(evt) {
  respuesta5 = document.getElementById(evt.target.id).value
}

//Respuesta 6
function respuestaSeis(evt) {
  respuesta6 = document.getElementById(evt.target.id).value
}

//Respuesta 7
function respuestaSiete(evt) {
  respuesta7 = document.getElementById(evt.target.id).value
}

//Respuesta 8
function respuestaOcho(evt) {
  respuesta8 = document.getElementById(evt.target.id).value
}

//Respuesta9
function respuestaNueve(evt) {
  respuesta9 = document.getElementById(evt.target.id).value
}

//Respuesta 10
function respuestaDiez(evt) {
  respuesta10 = document.getElementById(evt.target.id).value
}

//Respuesta 11
function respuestaOnce(evt) {
  respuesta11 = document.getElementById(evt.target.id).value
}

//Respuesta 12
function respuestaDoce(evt) {
  respuesta12 = document.getElementById(evt.target.id).value
}

//Respuesta 13 
function respuestaTrece(evt) {
  respuesta13 = document.getElementById(evt.target.id).value
}

//Respuesta 14
function respuestaCatorce(evt) {
  respuesta14 = document.getElementById(evt.target.id).value
}

//Respuesta 15
function respuestaQuince(evt) {
  respuesta15 = document.getElementById(evt.target.id).value
}

//Respuesta 16
function respuestaDieciseis(evt) {
  respuesta16 = document.getElementById(evt.target.id).value
}

//Respuesta 17
function respuestaDiecisiete(evt) {
  respuesta17 = document.getElementById(evt.target.id).value
}

//Respuesta 18
function respuestaDieciocho(evt) {
  respuesta18 = document.getElementById(evt.target.id).value
}

//Respuesta 19
function respuestaDiecinueve(evt) {
  respuesta19 = document.getElementById(evt.target.id).value
}

//Respuesta 20
function respuestaVeinte(evt) {
  respuesta20 = document.getElementById(evt.target.id).value
}

//Respuesta 21
function respuestaVeintiuno(evt) {
  respuesta21 = document.getElementById(evt.target.id).value
}

//Respuesta 22
function respuestaVeintidos(evt) {
  respuesta22 = document.getElementById(evt.target.id).value
}

//Respuesta 23  
function respuestaVeintitres(evt) {
  respuesta23 = document.getElementById(evt.target.id).value
}

//Respuesta 24  
function respuestaVeinticuatro(evt) {
  respuesta24 = document.getElementById(evt.target.id).value
}

//Respuesta 25  
function respuestaVeinticinco(evt) {
  respuesta25 = document.getElementById(evt.target.id).value
}

//Respuesta 26  
function respuestaVeintiseis(evt) {
  respuesta26 = document.getElementById(evt.target.id).value
}


//Respuesta 27  
function respuestaVeintisiete(evt) {
  respuesta27 = document.getElementById(evt.target.id).value
}

//Respuesta 28  
function respuestaVeintiocho(evt) {
  respuesta28 = document.getElementById(evt.target.id).value
}

//Respuesta 29 
function respuestaVeintinueve(evt) {
  respuesta29 = document.getElementById(evt.target.id).value
}

//Respuesta 30 
function respuestaTreinta(evt) {
  respuesta30 = document.getElementById(evt.target.id).value
}

//Respuesta 31 
function respuestaTreintayuno(evt) {
  respuesta31 = document.getElementById(evt.target.id).value
}


//Guardando contenedores

    var contenedor6 = document.getElementById('contenedor6')
    var contenedor7 = document.getElementById('contenedor7')
    var contenedor8 = document.getElementById('contenedor8')
    var contenedor9 = document.getElementById('contenedor9')
    var contenedor10 = document.getElementById('contenedor10')
    var contenedor11 = document.getElementById('contenedor11')
    var contenedor12 = document.getElementById('contenedor12')
    var contenedor13 = document.getElementById('contenedor13')
    var contenedor14 = document.getElementById('contenedor14')
    var contenedor15 = document.getElementById('contenedor15')
    var contenedor16 = document.getElementById('contenedor16')
    var contenedor17 = document.getElementById('contenedor17')
    var contenedor18 = document.getElementById('contenedor18')
    var contenedor19 = document.getElementById('contenedor19')
    var contenedor20 = document.getElementById('contenedor20')
    var contenedor21 = document.getElementById('contenedor21')
    var contenedor22 = document.getElementById('contenedor22')
    var contenedor23 = document.getElementById('contenedor23')
    var contenedor24 = document.getElementById('contenedor24')
    var contenedor25 = document.getElementById('contenedor25')
    var contenedor26 = document.getElementById('contenedor26')
    var contenedor27 = document.getElementById('contenedor27')
    var contenedor28 = document.getElementById('contenedor28')
    var contenedor29 = document.getElementById('contenedor29')
    var contenedor30 = document.getElementById('contenedor30')
    var contenedor31 = document.getElementById('contenedor31')


//Validando las respuestas para determinar los riesgos

function validarRespuestas() {
  if (respuesta1 == "a") {
    alert("Fin de la prueba");
    saveAndClear()
  }

  if ((respuesta1 == "b" || respuesta1 == "c") && respuesta2 >= 0 && respuesta3 >= 0 && respuesta4 >= 0) {
    if (respuesta5 == "a" && (respuesta6 == "a" || respuesta6 == "b")) {
      alert("Sin riesgo de embarazo , sin riesgo de ITS, etapa de cambio: sin etapa")
      saveAndClear()
    }
    if (respuesta5 == "b" || respuesta5 == "c" || respuesta5 == "d" || respuesta5 == "e") {
      if (respuesta8 == "a" || respuesta12 == "a") {
        if (respuesta9 == "a" || respuesta13 == "a") {
          if (respuesta18 == "a") {

            if (respuesta19 == "a") {
              alert("Riesgo medio de embarazo, riesgo bajo de ITS, etapa de cambio : Sin etapa");
              saveAndClear()
            }

            if ((respuesta19 == "b" || respuesta19 == "c")) {
              alert("Riesgo alto de embarazo, riesgo bajo de ITS, etapa de cambio: Sin etapa");
              saveAndClear()
            }

            if (respuesta19 == "d") {
              if (respuesta20 == "a") {
                if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                  if (respuesta21 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta21 == "b" || respuesta21 == "c") {
                    alert("Riesgo medio de embarazo, riesgo bajo de ITS, Etapa de camio: Preparacion")
                    saveAndClear()
                  }

                  if (respuesta21 == "d") {
                    alert("Riesgo alto de embarazo, riesgo bajo de ITS, Etapa de camio: Preparacion");
                    saveAndClear()
                  }

                }
              }


              if (respuesta20 == "b") {
                if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                  if (respuesta21 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta21 == "b" || respuesta21 == "c") {
                    alert("Riesgo medio de embarazo, riesgo bajo de ITS, Etapa de camio: Accion");
                    saveAndClear()
                  }
                  if (respuesta21 == "d") {
                    alert("Riesgo alto de embarazo, riesgo bajo de ITS, Etapa de camio: Accion");
                    saveAndClear()
                  }

                }
              }

              if (respuesta20 == "c") {
                if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                  if (respuesta21 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta21 == "b" || respuesta21 == "c") {
                    alert("Riesgo medio de embarazo, riesgo bajo de ITS, Etapa de camio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta21 == "d") {
                    alert("Riesgo alto de embarazo, riesgo bajo de ITS, Etapa de camio: Mantenimiento");
                    saveAndClear()
                  }

                }
              }

            }


            if (respuesta19 == "e") {
              if (respuesta23 == "a") {
                if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                  if (respuesta24 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta24 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta24 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                }
              }

              if (respuesta23 == "b") {
                if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                  if (respuesta24 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta24 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta24 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                }
              }

              if (respuesta23 == "c") {
                if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                  if (respuesta24 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta24 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta24 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                }
              }
            }



            if (respuesta19 == "f" || respuesta19 == "g") {
              if (respuesta26 == "a") {
                if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                  if (respuesta27 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta27 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta27 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                }
              }

              if (respuesta26 == "b") {
                if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                  if (respuesta27 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta27 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta27 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                }
              }

              if (respuesta26 == "c") {
                if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                  if (respuesta27 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta27 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta27 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                }
              }
            }


            if (respuesta19 == "h") {
              if ((respuesta30 == "a" || respuesta30 == "b" || respuesta30 == "c")) {
                if (respuesta29 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta29 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta29 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta18 == "b") {
            if (respuesta31 != "h") {
              alert("Riesgo alto de embarazo, riesgo bajo de ITS, etapa de cambio: Contemplacion");
              saveAndClear()
            }
            if (respuesta31 == "h") {
              alert("Riesgo alto de embarazo, riesgo bajo de ITS, etapa de cambio: Precontemplacion");
              saveAndClear()
            }
          }


        }
      }

      if (respuesta8 == "b" || respuesta12 == "b") {
       if (respuesta18 == "a") {

          if (respuesta19 == "a") {
            alert("Riesgo medio de embarazo, riesgo medio de ITS, etapa de cambio : Sin etapa");
            saveAndClear()
          }

          if ((respuesta19 == "b" || respuesta19 == "c")) {
            alert("Riesgo alto de embarazo, riesgo medio de ITS, etapa de cambio: Sin etapa");
            saveAndClear()
          }

          if (respuesta19 == "d") {
            if (respuesta20 == "a") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta21 == "b") {
                  alert("Riesgo medio de embarazo, riesgo bajo de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }

                if (respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo medio de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo bajo de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }


              }
            }


            if (respuesta20 == "b") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio:  Accion");
                  saveAndClear()
                }
                if (respuesta21 == "b" || respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo medio de ITS, Etapa de camio:  Accion");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo medio de ITS, Etapa de camio: Accion");
                  saveAndClear()
                }

              }
            }

            if (respuesta20 == "c") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta21 == "b" || respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo medio de ITS, Etapa de camio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo medio de ITS, Etapa de camio: Mantenimiento");
                  saveAndClear()
                }

              }
            }

          }
          if (respuesta19 == "e") {
            if (respuesta23 == "a") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
              }
            }

            if (respuesta23 == "b") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
              }
            }

            if (respuesta23 == "c") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta19 == "f" || respuesta19 == "g") {
            if (respuesta26 == "a") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
              }
            }

            if (respuesta26 == "b") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
              }
            }

            if (respuesta26 == "c") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta19 == "h") {
            if ((respuesta30 == "a" || respuesta30 == "b" || respuesta30 == "c")) {
              if (respuesta29 == "a") {
                alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                saveAndClear()
              }
              if (respuesta29 == "b") {
                alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                saveAndClear()
              }
              if (respuesta29 == "c") {
                alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                saveAndClear()
              }
            }
          }
        }
      }


      if (respuesta18 == "b") {
        if (respuesta31 != "h") {
          alert("Riesgo alto de embarazo, riesgo medio de ITS, etapa de cambio: Contemplacion");
          saveAndClear()
        }
        if (respuesta31 == "h") {
          alert("Riesgo alto de embarazo, riesgo medio de ITS, etapa de cambio: Precontemplacion");
          saveAndClear()
        }
      }

    }

    if(respuesta5 == "f" || respuesta5 =="g"){
      if (respuesta8 == "a" || respuesta8 == "b" || respuesta8 == "c" || respuesta8 == "d" || respuesta8 == "e" || respuesta12 == "a" || respuesta12 == "b" || respuesta12 == "c" || respuesta12 == "d" ||respuesta12 == "e"){
        if((respuesta9 == "a" || respuesta9=="b" || respuesta9 == "c") && (respuesta13 == "a" || respuesta13 == "b" || respuesta13 == "c")){
            if (respuesta18 == "a") {

              if (respuesta19 == "a") {
                alert("Riesgo medio de embarazo, riesgo alto de ITS, etapa de cambio : Sin etapa");
                saveAndClear()
              }

              if ((respuesta19 == "b" || respuesta19 == "c")) {
                alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Sin etapa");
                saveAndClear()
              }

              if (respuesta19 == "d") {
                if (respuesta20 == "a") {
                  if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                    if (respuesta21 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta21 == "b") {
                      alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                      saveAndClear()
                    }

                    if (respuesta21 == "c") {
                      alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta21 == "d") {
                      alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                      saveAndClear()
                    }


                  }
                }


                if (respuesta20 == "b") {
                  if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                    if (respuesta21 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta21 == "b" || respuesta21 == "c") {
                      alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Accion");
                      saveAndClear()
                    }
                    if (respuesta21 == "d") {
                      alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Accion");
                      saveAndClear()
                    }

                  }
                }

                if (respuesta20 == "c") {
                  if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                    if (respuesta21 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta21 == "b" || respuesta21 == "c") {
                      alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta21 == "d") {
                      alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Mantenimiento");
                      saveAndClear()
                    }

                  }
                }

              }

              if (respuesta19 == "e") {
                if (respuesta23 == "a") {
                  if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                    if (respuesta24 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta24 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta24 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                  }
                }

                if (respuesta23 == "b") {
                  if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                    if (respuesta24 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta24 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta24 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                  }
                }

                if (respuesta23 == "c") {
                  if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                    if (respuesta24 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta24 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta24 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                  }
                }
              }


              if (respuesta19 == "f" || respuesta19 == "g") {
                if (respuesta26 == "a") {
                  if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                    if (respuesta27 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta27 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta27 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                  }
                }

                if (respuesta26 == "b") {
                  if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                    if (respuesta27 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta27 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta27 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                  }
                }

                if (respuesta26 == "c") {
                  if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                    if (respuesta27 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta27 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta27 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                  }
                }
              }


              if (respuesta19 == "h") {
                if ((respuesta30 == "a" || respuesta30 == "b" || respuesta30 == "c")) {
                  if (respuesta29 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta29 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta29 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                }
              }
            }


            if (respuesta18 == "b") {
              if (respuesta31 != "h") {
                alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Contemplacion");
                saveAndClear()
              }
              if (respuesta31 == "h") {
                alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Precontemplacion");
                saveAndClear()
              }

            }
        }
      }

      if (respuesta8 == "c" || respuesta8 == "d" || respuesta8 == "e" || respuesta12 == "c" || respuesta12 == "d" ||respuesta12 == "e") {
        if (respuesta18 == "a") {

          if (respuesta19 == "a") {
            alert("Riesgo medio de embarazo, riesgo alto de ITS, etapa de cambio : Sin etapa");
            saveAndClear()
          }

          if ((respuesta19 == "b" || respuesta19 == "c")) {
            alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Sin etapa");
            saveAndClear()
          }

          if (respuesta19 == "d") {
            if (respuesta20 == "a") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta21 == "b") {
                  alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }

                if (respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }


              }
            }


            if (respuesta20 == "b") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta21 == "b" || respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Accion");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Accion");
                  saveAndClear()
                }

              }
            }

            if (respuesta20 == "c") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta21 == "b" || respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Mantenimiento");
                  saveAndClear()
                }

              }
            }

          }



          if (respuesta19 == "e") {
            if (respuesta23 == "a") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
              }
            }

            if (respuesta23 == "b") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
              }
            }

            if (respuesta23 == "c") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta19 == "f" || respuesta19 == "g") {
            if (respuesta26 == "a") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
              }
            }

            if (respuesta26 == "b") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
              }
            }

            if (respuesta26 == "c") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta19 == "h") {
            if ((respuesta30 == "a" || respuesta30 == "b" || respuesta30 == "c")) {
              if (respuesta29 == "a") {
                alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                saveAndClear()
              }
              if (respuesta29 == "b") {
                alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                saveAndClear()
              }
              if (respuesta29 == "c") {
                alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                saveAndClear()
              }
            }
          }
        }


        if (respuesta18 == "b") {
          if (respuesta31 != "h") {
            alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Contemplacion");
            saveAndClear()
          }
          if (respuesta31 == "h") {
            alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Precontemplacion");
            saveAndClear()
          }
        }

      }
    
    }
    
    if(respuesta5 == "h"){
      alert("Sin riesgo de embarazo, riesgo bajo de ITS, etapa de cambio : Sin etapa");
      saveAndClear()
    }

  } 
}


function saveAndClear () {
  // Obtengo la fecha actual
  var fecha = new Date()
  var month = fecha.getMonth() + 1
  var fechaCompleta = fecha.getFullYear() + '-' + month + '-' + fecha.getDate() + ' ' + fecha.getHours() + ':' + fecha.getMinutes()

  var json = {
    resp1: respuesta1,
    resp2: respuesta2 || 'N/A',
    resp3: respuesta3 || 'N/A',
    resp4: respuesta4 || 'N/A',
    resp5: respuesta5 || 'N/A',
    resp6: respuesta6 || 'N/A',
    resp7: respuesta7 || 'N/A',
    resp8: respuesta8 || 'N/A',
    resp9: respuesta9 || 'N/A',
    resp10: respuesta10 || 'N/A',
    resp11: respuesta11 || 'N/A',
    resp12: respuesta12 || 'N/A',
    resp13: respuesta13 || 'N/A',
    resp14: respuesta14 || 'N/A',
    resp15: respuesta15 || 'N/A',
    resp16: respuesta16 || 'N/A',
    resp17: respuesta17 || 'N/A',
    resp18: respuesta18 || 'N/A',
    resp19: respuesta19 || 'N/A',
    resp20: respuesta20 || 'N/A',
    resp21: respuesta21 || 'N/A',
    resp22: respuesta22 || 'N/A',
    resp23: respuesta23 || 'N/A',
    resp24: respuesta24 || 'N/A',
    resp25: respuesta25 || 'N/A',
    resp26: respuesta26 || 'N/A',
    resp27: respuesta27 || 'N/A',
    resp28: respuesta28 || 'N/A',
    resp29: respuesta29 || 'N/A',
    resp30: respuesta30 || 'N/A',
    resp31: respuesta31 || 'N/A',
    fecha: fechaCompleta,
    numeroFolio: folio
  }
  var db = firebase.firestore()
  db.collection('responses').add(json)
  document.getElementById('formulario').reset()
  
}

var btnSubmit = document.getElementById('enviar')
btnSubmit.addEventListener('click', function (evt) {
  // prevent the refresh of the browser
  evt.preventDefault()
  var fillInput = false
  if (respuesta1 != 'a') {
    if (respuesta2.length == 0) {
      alert("Ingrese respuesta a la pregunta N° 2");
      fillInput = true
    }

    if (respuesta3.length == 0) {
      alert("Ingrese respuesta a la pregunta N° 3");
      fillInput = true
    }

    if (respuesta4.length == 0) {
      alert("Ingrese respuesta a la pregunta N° 4");
      fillInput = true
    }
  }

  if (!fillInput) validarRespuestas()
      
})

    
    
    

  
    //Funciones para mostrar flujos de preguntas

    function mostrarBloque(ref){
      if(ref == "a" ){
        //Terminar
      }
      if(ref == "b" || ref == "c"){
        contenedor2.style.display = 'block'
      }
    }

    
    function mostrarPreguntasResp5(ref) {

    if(ref == "5a"){        
        contenedor6.style.display = 'block'  
    }
    if(ref == "5b" || ref == "5c" || ref == "5f"){        
        contenedor7.style.display = 'block'        
    }
    if(ref == "5d" || ref == "5e" || ref == "5g"){
        contenedor11.style.display = 'block'
        
    }
     
  }
  
  
  function mostrarPreguntasResp6(ref){
      if(ref == "6a"){
          contenedor31.style.display = 'block'
      }
      if(ref == "6b"){
          //Terminar
      }
      
  }
  
  function mostrarPreguntasResp7(ref){
      if(ref != " " ){
          contenedor8.style.display = 'block'
      }
  }

  function mostrarPreguntasResp8(ref){
      if(ref == "8a"){
          contenedor9.style.display = 'block'
      }
      if((respuesta5 == "b" || respuesta5 == "c") && (ref != "8a")  ){
          contenedor10.style.display = 'block'
      }
      if(respuesta5 == "f" && (ref != "8a")){
          contenedor10.style.display = 'block'
      }
      
  }
  
  function mostrarPreguntasResp9(ref){
      if((respuesta5 == "b" || respuesta5 == "c" ) && ref == "9a"){
          contenedor18.style.display = 'block'
      }
      if(respuesta5 == "f" && (ref != " ")){
    
          contenedor15.style.display = 'block'
      }

  }

  function mostrarPreguntasResp10(ref){
      if(ref != " " ){
          contenedor18.style.display = 'block'
      }
  }
  
  
  function mostrarPreguntasResp11(ref){
      if(ref != " " ){
          contenedor12.style.display = 'block'
      }
      
  }
  
  function mostrarPreguntasResp12(ref){
      if(ref == "12a"){
          contenedor13.style.display = 'block'
      }
      if((respuesta5 == "d" || respuesta5 == "e") && (ref != "12a")){
          contenedor14.style.display = 'block'
      }
      
      if(respuesta5 == "g" && ref != "12a"){
          contenedor14.style.display = 'block'
      }
    
}
  
  function mostrarPreguntasResp13(ref){
      
      if((respuesta5 == "d" || respuesta5 == "e") && ref == "13a" ){
          contenedor18.style.display = 'block'
      }
      if((respuesta5 == "d" || respuesta5 == "e") && (ref != "13a")){
          contenedor10.style.display = 'block'
      }
      if(respuesta5 == "g" && ref == "13a"){
          contenedor15.style.display = 'block'
      }
      if(respuesta5 == "g" && ref != "13a"){
          contenedor15.style.display = 'block'
      }
      
  }

  function mostrarPreguntasResp14(ref){
      if(ref != " " ){
          contenedor15.style.display = 'block'
      }
      
  }
  
  function mostrarPreguntasResp15(ref){
      if(ref == "15a"){
          contenedor16.style.display = 'block'
      }
      if(ref != "15a"){
          contenedor17.style.display = 'block'
      }
  }
  
  function mostrarPreguntasResp16(ref){
      if(ref != " "){
          contenedor18.style.display = 'block'
      }

  }
  
  function mostrarPreguntasResp17(ref){
      if(ref != " " ){
          contenedor18.style.display = 'block'
      }
  }
  
  function mostrarPreguntasResp18(ref){
      if(ref == "18a"){
          contenedor19.style.display = 'block'
      }
      if(ref == "18b"){
          contenedor31.style.display = 'block'
      }
  }
  
  function mostrarPreguntasResp19(ref){
      if(respuesta5 == "b" || respuesta5 == "c" || respuesta5 == "f" || respuesta5 == "g"){

        if(ref == "19a" || ref == "19b" || ref == "19c"){
           contenedor31.style.display = 'block'
       }
       if(ref == "19d"){
           contenedor20.style.display = 'block'
       }
       if(ref == "19e"){
           contenedor23.style.display = 'block'
       }
       if(ref == "19f" || ref == "19g"){
           contenedor26.style.display = 'block'
       }
       if(ref == "19h"){
           contenedor29.style.display = 'block'
       }
    }  

    if(respuesta5=="d" || respuesta5 == "e"){
      if(ref == "19a" || ref == "19b" || ref== "19c"){
        contenedor31.style.display = 'block'
      }
      if(ref == "19d"){
           contenedor20.style.display = 'block'
       }
    }  
  }

  
  function mostrarPreguntasResp20(ref){
      if(ref != " "){
          contenedor21.style.display = 'block'
      }
  } 
  
  function mostrarPreguntasResp21(ref){
      if(ref != " "){
          contenedor22.style.display = 'block'
      }
  } 
  
  function mostrarPreguntasResp22(ref){
      if(ref == "12a"){
          //Terminar
      }
      if(ref != "12a"){
          contenedor31.style.display = 'block'
      }
  } 
  
  function mostrarPreguntasResp23(ref){
      if(ref != " "){
          contenedor24.style.display = 'block'
      }
  }
  
  function mostrarPreguntasResp24(ref){
      if(ref != " "){
          contenedor25.style.display = 'block'
      }
  }
  
  function mostrarPreguntasResp25(ref){
           
      if(ref != " "){
          contenedor31.style.display = 'block'
      }
  }
  
  function mostrarPreguntasResp26(ref){
      if(ref != " "){
          contenedor27.style.display = 'block'
      }
  }
  
  
  function mostrarPreguntasResp27(ref){
      if(ref != " "){
          contenedor28.style.display = 'block'
      }
  }
  

  function mostrarPreguntasResp28(ref){
      if(ref != " "){
          contenedor31.style.display = 'block'
      }
  }
  
  function mostrarPreguntasResp29(ref){
      if(ref != " "){
          contenedor30.style.display = 'block'
      }

  }
  
  function mostrarPreguntasResp30(ref){
       if(ref != " "){
          contenedor31.style.display = 'block'
      }
  }

