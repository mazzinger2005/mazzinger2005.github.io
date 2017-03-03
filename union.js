var troncoForma = new THREE.CylinderGeometry(1, 1, 1.5);
var cuboForma = new THREE.CubeGeometry(1, 0.5, 1);
var esferaForma = new THREE.SphereGeometry(1);
esferaForma.translate(0,1,0);
cuboForma.translate(0,-1.5,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var cuboMalla = new THREE.Mesh(cuboForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
arbolForma.merge(cuboMalla.geometry, cuboMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);


var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
