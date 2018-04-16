window.addEventListener('keydown',zmienDlugosc)             // Nasłuchiwanie przyciskanych klawiszy

    let map, marker;                                      // Deklaracja zmiennych potrzebnych do wykonania funkcji
    let markerX;
    let markerY;
    let faceImg = 'Capture.png';
    

      function initMap() {                                 // Funcjca inicjalizująca mapę
        pobierzeLokalizacje()                              //Pobranie aktualnej lokalizacji  
        let uluru = {lat: 52, lng: 19};                    //Początkowe ustawienie długości oraz szerokości geograficznej   
         map = new google.maps.Map(document.getElementById('map'), {             // Stworzenie obiektu mapy, przyczepienie go do elemntu Html, stworzenie początkowych własności mapy
          zoom: 4,
          center: uluru,
          keyboardShortcuts: false
        });
         marker = new google.maps.Marker({                 // Stworzenie obiektu markera, ustawienie własności markera
          position: uluru,
          map: map,
          animation: google.maps.Animation.BOUNCE,
          draggable: true,
           icon: faceImg
        });

        markerX = 52;                       // Utworzenie początkowych wartości dla długości i szerokości geograficznej
        markerY = 19;
       
      
      }

      function pobierzeLokalizacje() {                // Pobieranie lokalizacji

            navigator.geolocation.getCurrentPosition(geoOk, geoFail)
        }

        function geoOk (p) {                  //Pobranie długości oraz szerokości geograficznej
           
            console.log(p)
            let mylat = p.coords.latitude
            let mylng = p.coords.longitude
            marker.setPosition({lat: mylat, lng: mylng})
            map.setCenter({lat: mylat, lng: mylng})
            map.setZoom(12)
        }

        function geoFail(err) 
        {
          console.log(err)
        }

        function zmienDlugosc(e) {      //Zmiana długości lub szerokości geograficznej po naciśnięciu klawiszów strzałek na klawiaturze
          console.log(e);
            let tag = e.keyCode;

            switch(tag)
            {
              case 38:
              markerX +=0.1;
              break;
              case 40:
              markerX -=0.1;
              break;
              case 37:
              markerY -=0.1;
              break;
              case 39:
              markerY +=0.1;
              break;
                           
            }
       

            map.setZoom(6)
            marker.setPosition({lat:markerX, lng:markerY});
            map.setCenter({lat:markerX, lng:markerY});

          }
            

         