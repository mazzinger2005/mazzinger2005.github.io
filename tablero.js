////////////////////INICIO/////////////////////////////////////////////////////////

//////////////////////////PARÁMETROS DE LIENZO (TABLERO)///////////////////////////
WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var renderizador = new THREE.WebGLRenderer({antialias: true});
renderizador.setSize(WIDTH,HEIGHT);
document.body.appendChild(renderizador.domElement);

//////////////////////////SELECCIÓN DE MATERIAL////////////////////////////////////
var material = new THREE.MeshNormalMaterial();
var material1 = new THREE.MeshLambertMaterial({color: 0x9999FF});
var material2= new THREE.MeshLambertMaterial({color: 0xF0D58C});
var material3= new THREE.MeshLambertMaterial({color: 0xFFFFF0});

//////////FIGURA 1 POR REVOLUCIÓN/////////////////////////////////////////////////
var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.6 ) * 15 + 50,
                     ( i - 5 ) * 4 ) );
}
var forma = new THREE.LatheGeometry(puntos);

var mallaGusano = new THREE.Mesh( forma, material );
var mallaGusanoA = new THREE.Mesh( forma, material );
mallaGusano.rotateX( Math.PI/6 );
mallaGusano.rotateY( Math.PI/6 );
mallaGusanoA.rotateX( Math.PI/6 );
mallaGusanoA.rotateY( Math.PI/6 );

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

var arbolMalla = new THREE.Mesh(arbolForma, material);
var arbolMallaA = new THREE.Mesh(arbolForma, material);

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

var mallaPicos = new THREE.Mesh( forma, material );
var mallaPicosA = new THREE.Mesh( forma, material );
mallaPicos.rotateZ( Math.PI/6 );
mallaPicosA.rotateZ( Math.PI/6 );

//////////FIGURA 4 POR VÉRTICES//////////////////////////////////////////////////////

var forma = new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 50,  0,  50 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 50,  0, -50 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-50,  0, -50 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-50,  0,  50 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 0,  100,  0 ) ); // Vértice 4
forma.faces.push( new THREE.Face3( 3, 2, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 3, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 2, 3, 4 ) ); // Cara 5

forma.computeBoundingSphere();
forma.computeFaceNormals();

var mallaPiramide = new THREE.Mesh( forma, material );
var mallaPiramideA = new THREE.Mesh( forma, material );
mallaPiramide.rotateX(Math.PI/8);
mallaPiramideA.rotateX(Math.PI/8);

//////////FIGURA 5 POR UNIÓN DE MALLAS/////////////////////////////////////////////////

var troncoForma = new THREE.CylinderGeometry(25, 10, 75);
var cuboForma = new THREE.CubeGeometry(100,25, 100);
var esferaForma = new THREE.SphereGeometry(35);
esferaForma.translate(0,60,0);
cuboForma.translate(0,-50,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var cuboMalla = new THREE.Mesh(cuboForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma1 = new THREE.Geometry();
arbolForma1.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma1.merge(esferaMalla.geometry, esferaMalla.matrix);
arbolForma1.merge(cuboMalla.geometry, cuboMalla.matrix);

var arbolMalla1 = new THREE.Mesh(arbolForma1, material);
var arbolMalla1A = new THREE.Mesh(arbolForma1, material);

//////////FIGURA 6 POR UNIÓN DE MALLAS/////////////////////////////////////////////////

var troncoForma = new THREE.CylinderGeometry(25, 10, 75);
var troncoForma1 = new THREE.CylinderGeometry(10, 25, 75);
var cuboForma = new THREE.CubeGeometry(60,15, 60);
var cuboForma1 = new THREE.CubeGeometry(60,15, 60);
cuboForma.translate(0,-30,0);
cuboForma1.translate(0,120,0);
troncoForma1.translate(0,75,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var troncoMalla1 = new THREE.Mesh(troncoForma1);
var cuboMalla = new THREE.Mesh(cuboForma);
var cuboMalla1 = new THREE.Mesh(cuboForma1);

var arbolForma2 = new THREE.Geometry();
arbolForma2.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma2.merge(troncoMalla1.geometry, troncoMalla1.matrix);
arbolForma2.merge(cuboMalla.geometry, cuboMalla.matrix);
arbolForma2.merge(cuboMalla1.geometry, cuboMalla1.matrix);

var arbolMalla2 = new THREE.Mesh(arbolForma2, material);
var arbolMalla2A = new THREE.Mesh(arbolForma2, material);

////////////////////ESCENAS////////////////////////////////////////////////////////////
var escena = new THREE.Scene();
escena.add(mallaGusano);
escena.add(arbolMalla);
escena.add(mallaPicos);
escena.add(mallaPiramide);
escena.add(arbolMalla1);
escena.add(arbolMalla2);
escena.add(mallaGusanoA);
escena.add(arbolMallaA);
escena.add(mallaPicosA);
escena.add(mallaPiramideA);
escena.add(arbolMalla1A);
escena.add(arbolMalla2A);
////////////////////PARÁMETROS DE CAMARA//////////////////////////////////////////////
var camara = new THREE.PerspectiveCamera(65,(WIDTH / HEIGHT),0.1,10000);
camara.position.z = 700;
camara.position.y = 150;
camara.position.x = 100;

//////////////////////POSICIÓN DE FIGURAS EN TABLERO//////////////////////////////////
camara.lookAt(mallaGusano.position);

mallaGusano.position.x=-100;
mallaGusano.position.z=300;
mallaGusanoA.position.x=-100;
mallaGusanoA.position.z=-400;

arbolMalla.position.x=-350;
arbolMalla.position.z=250;
arbolMallaA.position.x=-350;
arbolMallaA.position.z=-350;

mallaPicos.position.x=-430;
mallaPicos.position.z=300;
mallaPicosA.position.x=-430;
mallaPicosA.position.z=-400;

mallaPiramide.position.x=100;
mallaPiramide.position.z=250;
mallaPiramideA.position.x=100;
mallaPiramideA.position.z=-350;

arbolMalla1.position.x=250;
arbolMalla1.position.z=300;
arbolMalla1A.position.x=250;
arbolMalla1A.position.z=-400;

arbolMalla2.position.x=430;
arbolMalla2.position.z=250;
arbolMalla2A.position.x=430;
arbolMalla2A.position.z=-350;

escena.add(camara);

var luz1 = new THREE.PointLight(0xff0044);
luz1.position.set(120,260,100);

var luz2 = new THREE.PointLight(0x4499ff);
luz2.position.set(-100,100,200);

escena.add(luz1);
escena.add(luz2);

renderizador.render( escena, camara );
