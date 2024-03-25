import { Link, useNavigate } from "react-router-dom";
import PropType from 'prop-types';

function LinkButton({children, to}) {
      const navigate = useNavigate();
      const className = ' text-sm text-blue-500 hover:text-blue-700 hover:underline'

      if (to === '-1') {
        return  <button onClick={() => navigate(-1)} className={className}>&larr; Go back</button>
      }

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    )
}

LinkButton.propTypes = {
    children: PropType.string,
    to: PropType.string,
}


export default LinkButton
