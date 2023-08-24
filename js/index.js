import { CARviewer} from './MKViewer.js';
import * as THREE from './THREE/three.module.js';
import { TWEEN } from './THREE/tween.module.min.js';
function _(elm){return document.getElementById(elm)}
let Viewer = new CARviewer(_("CarViewer"))
Viewer.initScene()
Viewer.animate()
// Viewer.render = function() {
//     TWEEN.update()
//     Viewer.renderer.render(Viewer.scene, Viewer.camera);
//   }






