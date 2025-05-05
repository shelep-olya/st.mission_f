import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import TaskDetailPage from "./pages/TaskDetailPage/TaskDetailPage";
import CreateNewPage from "./pages/CreateNewPage/CreateNewPage";
function App() {
  return (
    <div className="App">
      <CreateNewPage />
      <DashboardPage />
      <TaskDetailPage />
      <SignupForm />
      <LoginForm />
    </div>
  );
}

export default App;
