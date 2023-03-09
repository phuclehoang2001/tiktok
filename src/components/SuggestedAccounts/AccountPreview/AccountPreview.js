import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-1/155157736_367060491455544_5988936080769100404_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=OlLG-u370hMAX_-BxQp&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfCPdMYQ6LJS20DtfE8FpXsP1d2PJCsuRuwNHRz0Lp7UuA&oe=642CACE0"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary size="small">
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>羅小白S.white</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>羅小白</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>2.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>10.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
