import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png "
                alt="hihi"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Trung Anh</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <p className={cx('description-name')}>sdas</p>
            </div>
        </div>
    );
}

export default AccountItem;
