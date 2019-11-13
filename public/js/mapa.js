//https://www.datos.gov.co/resource/g373-n3y.json
let lugaresinfo=[]
const conseguirlugares = () =>{
	fetch('/web/prepaslagunacom/js/preparatorias.json')
	.then(response => response.json())
	.then(lugares =>{
		console.log(lugares)

		lugares.forEach(lugar=>{
			let lugarinfo={
				
				posicion:{lat:lugar.punto.coordinates[1],lng:lugar.punto.coordinates[0]},
				nombre:lugar.nombre

			}
			lugaresinfo.push(lugarinfo)
		})
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(usuariosUbicacion=>{
				let ubicacion ={
					lat:usuariosUbicacion.coords.latitude,
					lng:usuariosUbicacion.coords.longitude
				}
					dibujarMapa(ubicacion)		
			})
		}
	})
}
const dibujarMapa= (obj)=>{
	let mapa=new google.maps.Map(document.getElementById('map'),{
		center:obj,
		zoom:15
	})
	let marcadorUsuario = new google.maps.Marker({
		position:obj,
		title:'Tú ubicación'
	})
	marcadorUsuario.setMap(mapa)
	let marcadores = lugaresinfo.map(lugar=>{
		return new google.maps.Marker({
			position:lugar.posicion,
			title:lugar.nombre,
			map:mapa
		})
	})
}
conseguirlugares()