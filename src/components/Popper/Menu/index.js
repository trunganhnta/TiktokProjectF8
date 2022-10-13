import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import Header from '~/components/Popper/Menu/Header';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, item = [] }) {
    const renderItems = () => {
        return item.map((item, i) => <MenuItem key={i} data={item} />);
    };
    return (
        <Tippy
            interactive
            animation={false}
            hideOnClick={false}
            delay={[0, 800]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('list-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <Header title="Language" />
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
