var figura = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(0, 20);
figura.lineTo(5, 23);
figura.lineTo(0, 30);
figura.lineTo(10, 26);
figura.lineTo(20, 40);
figura.lineTo(30, 26);
figura.lineTo(40, 30);
figura.lineTo(35, 23);
figura.lineTo(40, 20);
figura.lineTo(30, 10);
figura.lineTo(20, 15);
figura.lineTo(10, 10);

var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 20} );
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/8 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
