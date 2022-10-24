import { faUber } from '@fortawesome/free-brands-svg-icons';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faRightToBracket,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Button from '~/components/Button';
import { MessageIcon, SendMessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import config from '~/config';

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
const handleChange = (menuItem) => {
    console.log(menuItem);
};

function Header() {
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>
                {/* search */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <Button outline className={cx('btn-upload')}>
                                    <UploadIcon /> <span>Upload</span>
                                </Button>
                            </Tippy>
                            <button className={cx('action-btn', 'btn')}>
                                <SendMessageIcon />
                            </button>
                            <button className={cx('action-btn', 'btn')}>
                                <MessageIcon />
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
                            <Image
                                src="https://atomiks.github.io/tippyjs/static/logo-ebc385458e03fdb24af078536af88065.svg"
                                alt="Nguyen Trung Anh"
                                className={cx('user-avatar', 'btn')}
                                fallback="https://tinypng.com/images/social/website.jpg"
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
