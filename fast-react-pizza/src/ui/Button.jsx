import PropType from 'prop-types';
import { Link } from 'react-router-dom';

function Button({children, disabled, to, type}) {

    const base = " text-sm bg-yellow-500 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded hover:bg-yellow-400 transition-colors duration-200 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        secondary: '  text-sm uppercase font-semibold text-stone-400 inline-block border-2 border-stone-300 tracking-wide rounded hover:text-stone-800 hover:bg-yellow-400 transition-colors duration-200 focus:bg-stone-400 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
        small: base + ' py-2 px-3 md:px-5 md:py-2.5 text-xs'
    }

    if (to) {
        return <Link to={to} className={styles[type]}>{children}</Link>
    }

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropType.string,
    disabled: PropType.bool,
    to: PropType.string,
    type: PropType.string,
}

export default Button
