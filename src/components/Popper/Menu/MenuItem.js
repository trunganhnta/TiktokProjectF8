import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const { icon, title, to } = data;
    return (
        <Button className={cx('menu-item')} leftIcon={icon} to={to}>
            {title}
        </Button>
    );
}

export default MenuItem;
