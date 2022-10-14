import { faUber } from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowUpFromBracket,
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faRightToBracket,
    faSignOut,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUber} />,
        title: 'View profile',
        to: '/@anh',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/Setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;
    const [arrResultSearch, setArrResultSearch] = useState([]);
    setTimeout(() => {
        setArrResultSearch([1, 2, 3]);
    }, 2000);

    const handleChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={arrResultSearch.length < 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                My tippy box
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
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
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn', 'btn')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn', 'btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={!currentUser ? MENU_ITEMS : USER_MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <img
                                src="https://atomiks.github.io/tippyjs/static/logo-ebc385458e03fdb24af078536af88065.svg"
                                alt="Nguyen Trung Anh"
                                className={cx('user-avatar', 'btn')}
                            />
                        ) : (
                            <button className={cx('more-btn', 'btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
