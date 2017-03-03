////////////////////INICIO/////////////////////////////////////////////////////////

//////////////////////////PARÁMETROS DE LIENZO (TABLERO)///////////////////////////
WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var renderizador = new THREE.WebGLRenderer({antialias: true});
renderizador.setSize(WIDTH,HEIGHT);
document.body.appendChild(renderizador.domElement);

//////////FIGURA 1 POR REVOLUCIÓN/////////////////////////////////////////////////
var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.6 ) * 15 + 50,
                     ( i - 5 ) * 4 ) );
}
var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var mallaGusano = new THREE.Mesh( forma, material );
mallaGusano.rotateX( Math.PI/6 );
mallaGusano.rotateY( Math.PI/6 );
//////////FIGURA 2 POR UNIÓN DE MALLAS/////////////////////////////////////////////
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

//////////FIGURA 3 POR EXTRUSIÓN//////////////////////////////////////////////////////

var figura = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(-10, 40);
figura.lineTo(0, 46);
figura.lineTo(-10, 60);
figura.lineTo(10, 52);
figura.lineTo(40, 80);
figura.lineTo(60, 52);
figura.lineTo(80, 60);
figura.lineTo(70, 46);
figura.lineTo(80, 40);
figura.lineTo(60, 10);
figura.lineTo(40, 30);
figura.lineTo(10, 10);

var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 40} );
var material = new THREE.MeshNormalMaterial();
var mallaPicos = new THREE.Mesh( forma, material );
mallaPicos.rotateX( Math.PI/16 );
mallaPicos.rotateY( Math.PI/16 );

//////////FIGURA 4 POR VÉRTICES//////////////////////////////////////////////////////



////////////////////ESCENAS////////////////////////////////////////////////////////////
var escena = new THREE.Scene();
escena.add(mallaGusano);
escena.add(arbolMalla);
escena.add(mallaPicos)

////////////////////PARÁMETROS DE CAMARA//////////////////////////////////////////////
var camara = new THREE.PerspectiveCamera(65,(WIDTH / HEIGHT),0.1,10000);
camara.position.z = 700;
camara.position.y = 140;
camara.position.x = 99;

//////////////////////POSICIÓN DE FIGURAS EN TABLERO//////////////////////////////////
camara.lookAt(mallaGusano.position);

mallaGusano.position.z=300;

arbolMalla.position.x=-300;
arbolMalla.position.z=250;

mallaPicos.position.x=-700;
mallaPicos.position.z=400;


escena.add(camara);

renderizador.render( escena, camara );
