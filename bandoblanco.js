var forma = new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 1,  0,  1 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,  0, -1 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-1,  0, -1 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-1,  0,  1 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 0,  2,  0 ) ); // Vértice 4
forma.faces.push( new THREE.Face3( 0, 2, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 4, 1, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 2, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 0, 2, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 3, 2, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 2, 0, 4 ) ); // Cara 5
forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
