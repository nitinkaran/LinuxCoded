import Home from './Home/Home';
import Stuff from './Stuff/Stuff';
import Board from './Game/Board/Board';
import Contact from './Contact/Contact';
import ShowPage from './ShowPage';

const locations = [
	{component:Contact,		path:	'/contact'},
	{component:Board,		path:	'/game'},
	{component:Stuff,		path:	'/stuff'},
	{component:Home,		path:	'/home'},
	{component:ShowPage,	path:	'/'}
];

export default locations;