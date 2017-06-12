function listener(){

	camara.aspect=window.innerWidth/window.innerHeight

	camara.updateProjectionMatrix();

	renderer.setSize(window.innerWidth/window.innerHeight)

}

var capturarp=false



function setup(){

	

	escena=new THREE.Scene();



	camara=new THREE.PerspectiveCamera( 500, window.innerWidth/window.innerHeight,1,1000);

	camara.position.z=20;



	renderer=new THREE.WebGLRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);



	troncoForma = new THREE.CylinderGeometry(3, 7.5, 15);

	esferaForma = new THREE.SphereGeometry(5);

	cuboForma = new THREE.CubeGeometry(5,5,5);

	cuboForma1 = new THREE.CubeGeometry(7.5,5,7.5);

	cuboForma2 = new THREE.CubeGeometry(10,5,10);

	esferaForma.translate(0,15,0);

	cuboForma.translate(0,5,0)

	cuboForma1.translate(0,0,0)

	cuboForma2.translate(0,-5,0)



	troncoMalla = new THREE.Mesh(troncoForma);

	esferaMalla = new THREE.Mesh(esferaForma);

	cuboMalla = new THREE.Mesh(cuboForma);

	cuboMalla1 = new THREE.Mesh(cuboForma1);

	cuboMalla2 = new THREE.Mesh(cuboForma2);



	arbolForma = new THREE.Geometry();

	arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);

	arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);

	arbolForma.merge(cuboMalla.geometry, cuboMalla.matrix);

	arbolForma.merge(cuboMalla1.geometry, cuboMalla1.matrix);

	arbolForma.merge(cuboMalla2.geometry, cuboMalla2.matrix);

	material = new THREE.MeshNormalMaterial();

	arbolMalla = new THREE.Mesh(arbolForma, material);

	escena.add(arbolMalla);


	var tipoEvento='remove';
	window.addEventListener(tipoEvento,listener,capturarp);

}



function push (e){

	if (e.keyCode===50)
		arbolMalla.position.z++;
	else if(e.keyCode===56)
		arbolMalla.position.z--;

	if (e.keyCode===54)
		arbolMalla.position.x++;
	else if(e.keyCode===52)
		arbolMalla.position.x--;

	if (e.keyCode===49)
		arbolMalla.position.y++;
	else if(e.keyCode===57)
		arbolMalla.position.y--;

}

window.addEventListener('keypress',push,false);





function loop(){

	requestAnimationFrame(loop);

	arbolMalla.rotation.y += 0.01;

	renderer.render(escena,camara);

}



var arbolMalla,camara,renderer,escena;

setup();

loop();



arbolMalla.rotation.x

arbolMalla.rotation.y
