import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);
const Button = forwardRef(
    (
        {
            to,
            href,
            children,
            className,
            leftIcon,
            rightIcon,
            text = false,
            primary = false,
            outline = false,
            small = false,
            large = false,
            disabled = false,
            rounded = false,
            onClick,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button';
        const classes = cx('wrapper', 'btn', {
            [className]: className,
            primary,
            outline,
            small,
            large,
            text,
            disabled,
            rounded,
        });

        const props = {
            onClick,
            ...passProps,
        };

        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }
        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }

        return (
            <Comp className={classes} {...props} ref={ref}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        );
    },
);

export default Button;
