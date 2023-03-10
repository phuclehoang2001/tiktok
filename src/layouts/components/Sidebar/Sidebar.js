import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useState, useEffect } from 'react';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;
function Sidebar() {
    const [suggestedAccounts, setSuggestedAccounts] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const [isSeeAll, setIsSeeAll] = useState(false);
    useEffect(() => {
        userService
            .getSuggestedUsers({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedAccounts((prevAccount) => {
                    return page !== 1 ? [...prevAccount, ...data] : data;
                });
            })
            .catch((error) => console.error(error));
    }, [page]);

    const handleViewChange = (isSeeAll) => {
        setIsSeeAll((preState) => !preState);
        if (isSeeAll) {
            setPage(page + 1);
        } else {
            setPage(1);
        }
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>
            <SuggestedAccounts
                label="Suggested Accounts"
                data={suggestedAccounts}
                onViewChange={handleViewChange}
                isSeeAll={isSeeAll}
            ></SuggestedAccounts>
            {/* <SuggestedAccounts label="Following Accounts"></SuggestedAccounts> */}
        </aside>
    );
}

export default Sidebar;
