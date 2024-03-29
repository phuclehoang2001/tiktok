import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ label, data = [], isSeeAll = false, onViewChange }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx('more-btn')} onClick={() => onViewChange(!isSeeAll)}>
                {isSeeAll ? 'See less' : 'See All'}
            </p>
        </div>
    );
}

SuggestedAccounts.prototype = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
