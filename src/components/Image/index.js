import classNames from 'classnames';
import { useState } from 'react';
import { forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            className={classNames(styles.wrapper, className)}
            onError={handleError}
        />
    );
});

export default Image;
