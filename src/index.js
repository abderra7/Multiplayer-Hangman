import Controller from './controller';
import View from './view';
import Store from './store';

//styles
import main from './styles/main.scss';


//this will save game information
const store = new Store();
//anything that has to do with the dom updating do it through here
const view = new View();
//controller handles the communication to and from the view and store
const controller = new Controller(store, view);
