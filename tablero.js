WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var renderizador = new THREE.WebGLRenderer({antialias: true});
renderizador.setSize(WIDTH,HEIGHT);
document.body.appendChild(renderizador.domElement);
//var camara = new THREE.PerspectiveCamera(65,(WIDTH / HEIGHT),0.1,10000);

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.6 ) * 15 + 50,
                     ( i - 5 ) * 4 ) );
}
var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera(65,(WIDTH / HEIGHT),0.1,10000);
camara.position.z = 500;

renderizador.render( escena, camara );
