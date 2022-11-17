import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/856e0f57c1aa39497c9203e38adcdd3b.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1668736800&x-signature=b9MSu94%2FrIj2LwmUJGcIBMxeRiU%3D"
                alt="Nhật Hạ"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nhatha_2501</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nhật Hạ</span>
            </div>
        </div>
    );
}

export default AccountItem;
