import {Router} from 'https://unpkg.com/@vaadin/router';
// import {logout} from './services/authServices.js'

import Home from './components/home.js';
import Register from './components/register.js';
import Login from './components/login.js';
// import { getFixtures } from './services/fixtureService.js';
import Fixtures from './components/fixture-element.js';



customElements.define('home-component', Home);
customElements.define('register-component', Register);
customElements.define('login-component', Login);
customElements.define('fixture-component', Fixtures);


const root = document.getElementById('root');
const router = new Router(root);
router.setRoutes([
    {
        path: '/',
        component: 'home-component',
    },
    {
        path: '/register',
        component: 'register-component'
    },
    {
        path: '/login',
        component: 'login-component'
    },
    {
        path: '/fixtures',
        component: 'fixture-component'
    }
    // {
    //     path: '/details/:id',
    //     component: 'movie-details'
    // },
    // {
    //     path: '/logout',
    //     action: (ctx, commands) => {
    //         logout();
    //         return commands.redirect('/');
    //     }
    // }
]);
