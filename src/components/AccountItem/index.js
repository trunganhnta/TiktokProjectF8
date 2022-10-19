import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { TickIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    const { avatar, nickname, full_name, tick } = data;
    return (
        <div onClick={onClick}>
            <Link to={`/@${nickname}`} className={cx('wrapper')}>
                <Image className={cx('avatar')} src={avatar} alt={nickname} />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{nickname}</span>
                        {tick && <TickIcon />}
                    </h4>
                    <span className={cx('description-name')}>{full_name}</span>
                </div>
            </Link>
        </div>
    );
}

export default AccountItem;
