import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-1/155157736_367060491455544_5988936080769100404_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=OlLG-u370hMAX_-BxQp&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfCPdMYQ6LJS20DtfE8FpXsP1d2PJCsuRuwNHRz0Lp7UuA&oe=642CACE0"
                alt="accountItem"
            ></img>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>羅小白S.white</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>羅小白</p>
            </div>
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
