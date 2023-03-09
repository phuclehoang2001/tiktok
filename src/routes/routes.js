//Layouts
import config from '~/config';
import { HeaderOnly } from '~/layouts';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
// không cần login
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },

    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.login, component: Login, layout: null },
];

// bắt buộc login
const privateRoutes = [
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile },
];

export { publicRoutes, privateRoutes };
