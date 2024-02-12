import { useEffect, useState, useReducer } from "react";
import githubReducer from "../../context/github/GithubReducer";
import LoadingSpinner from "../../assests/LoadingSpinner";
import UserItem from "./UserItem";

// Github API endpoint
const githubApiURL = `https://api.github.com/users`;

function UsersResults() {
  const [usersArray, setUsersArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  useEffect(function () {
    const getData = async () => {
      try {
        const res = await fetch(githubApiURL);
        const data = await res.json();
        // console.log(data);
        const refineData = data.map((user) => {
          return {
            login: user.login,
            avatar: user.avatar_url,
            id: user.node_id,
            url: user.html_url,
          };
        });
        setUsersArray(refineData);
        setLoading(false);
        // console.log(refineData);

        dispatch({
          type: "GET_USERS",
          payload: refineData,
        });
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  //   console.log(usersArray);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {usersArray.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
}

export default UsersResults;
