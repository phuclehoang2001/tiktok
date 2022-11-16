import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    size = false,
    text = false,
    disabled = false,
    rounded = false,
    children,
    className,
    icon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when button is disabled
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

    const classes = cx('wrapper', {
        [className]: className,
        [size]: size, //small, medium, large
        primary,
        outline,
        text,
        disabled,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>{children}</span>
            {icon && <span className={cx('icon')}>{icon}</span>}
        </Comp>
    );
}

export default Button;
