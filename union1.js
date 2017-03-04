var troncoForma = new THREE.CylinderGeometry(30, 75, 150);
var esferaForma = new THREE.SphereGeometry(50);
var cuboForma = new THREE.CubeGeometry(50,50,50);
var cuboForma1 = new THREE.CubeGeometry(75,50,75);
var cuboForma2 = new THREE.CubeGeometry(100,50,100);
esferaForma.translate(0,150,0);
cuboForma.translate(0,50,0)
cuboForma1.translate(0,0,0)
cuboForma2.translate(0,-50,0)

var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var cuboMalla = new THREE.Mesh(cuboForma);
var cuboMalla1 = new THREE.Mesh(cuboForma1);
var cuboMalla2 = new THREE.Mesh(cuboForma2);

var arbolForma = new THREE.Geometry();
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
arbolForma.merge(cuboMalla.geometry, cuboMalla.matrix);
arbolForma.merge(cuboMalla1.geometry, cuboMalla1.matrix);
arbolForma.merge(cuboMalla2.geometry, cuboMalla2.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);
