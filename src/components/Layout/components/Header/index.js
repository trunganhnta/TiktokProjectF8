import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [arrResultSearch, setArrResultSearch] = useState([]);
    setTimeout(() => {
        setArrResultSearch([1, 2, 3]);
    }, 2000);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Tippy
                    visible={arrResultSearch.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                My tippy box
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search account or videos" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon className="btn" icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('btn ', 'loading')} icon={faSpinner} />
                        <button className={cx('btn', 'search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>asss</div>
            </div>
        </header>
    );
}

export default Header;
