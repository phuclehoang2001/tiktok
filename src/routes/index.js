//Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// không cần login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// bắt buộc login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
