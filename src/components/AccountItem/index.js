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
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4e05cbcc87cd6320852f98be25f165fb~c5_100x100.jpeg?x-expires=1668477600&x-signature=KrJ%2FUQMo9CUgQGuZzPQs7fMxK%2BM%3D"
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
