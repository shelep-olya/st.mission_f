import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import TaskDetailPage from "./pages/TaskDetailPage/TaskDetailPage";
import CreateNewForm from "./components/CreateNewForm/CreateNewForm";
function App() {
  return (
    <div className="App">
      <CreateNewForm />
      <DashboardPage />
      <TaskDetailPage />
      <SignupForm />
      <LoginForm />
    </div>
  );
}

export default App;
