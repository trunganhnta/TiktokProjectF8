import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import Header from '~/components/Popper/Menu/Header';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, i) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={i}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            offset={[12, 8]}
            animation={false}
            hideOnClick={false}
            delay={[0, 800]}
            placement="bottom-end"
            onHidden={() => {
                setHistory([{ data: items }]);
            }}
            render={(attrs) => (
                <div className={cx('list-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header title="Language" onBack={() => setHistory((pre) => pre.slice(0, pre.length - 1))} />
                        )}
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
