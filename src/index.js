import Model from './model';
import View from './view';
import Controller from './controller';
import './drag';
//import {save, load} from './helpers'


const model = new Model();
//

const view = new View();
const controller = new Controller(model, view);
