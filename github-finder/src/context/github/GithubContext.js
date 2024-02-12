import { createContext, useContext, useState } from "react";

// Github API endpoint
const githubApiURL = `https://api.github.com/users`;

// instantiating a createContext object
const GithubConext = createContext();

// export the Provider function that will be subscribe to
/**
 *  The GithubProvider function fetch the data
 * from the Github API and save it the in a state.
 * It handles all the logic and then return the
 * GithubContext instance to provide the values to
 * the component subscribed to it
 *
 * @param {React.ReactNode} children
 * @returns {React.ReactNode} GithubContext
 */

export const GithubProvider = ({ chidren }) => {
  const [usersArray, setUsersArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch(githubApiURL);
      const data = await res.json();
      console.log(data);
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GithubConext.Provider value={{ usersArray, loading, getData }}>
      {chidren}
    </GithubConext.Provider>
  );
};

export default GithubConext;

/**
 * useGithubValues is a custom hook
 * that utilizes the useContext api to
 * provide the values of context provider
 *
 * @param {void}
 * @returns {object} context
 */

export function useGithubValues() {
  const context = useContext(GithubConext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
