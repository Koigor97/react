import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <div className="card shadow-md compact side bg-slate-700">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img
                src={user.avatar}
                alt={`Github repo profile of ${user.login}`}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.login}</h2>
          <div className="flex flex-col gap-1">
            <Link
              to={`/users/${user.login}`}
              className="tetx-base-content text-opacity-40"
            >
              Visit Profile
            </Link>
            <Link to={user.url} className="tetx-base-content text-opacity-40">
              Visit Repo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
