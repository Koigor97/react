import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { TaskItemsProvider } from "./components/context/TaskItems";

import Header from "./components/Header";
import Main from "./components/Main";
import ListItem from "./components/ListItem";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <TaskItemsProvider>
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Main>
                    <TaskForm />
                    <TaskStats />
                    <ListItem />

                    <AboutIconLink />
                  </Main>
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </>
    </TaskItemsProvider>
  );
}

export default App;
