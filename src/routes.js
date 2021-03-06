import IPChecker from './components/pages/IPChecker.vue'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Space from './components/pages/Space.vue'
import Maps from './components/pages/Maps.vue'

//Is there a simpler way to do these imports?
//import Pages from './components/pages'


export const routes = [
    { path: '', component: Home }, //path visible to users
    { path: '/ipchecker', component: IPChecker },
    { path: '/about', component: About },
    { path: '/Space', component: Space},
    { path: '/maps', component: Maps}
];
