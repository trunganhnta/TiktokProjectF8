import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('sidebar')}>
            <h2>SideBar Page</h2>
        </aside>
    );
}

export default SideBar;
