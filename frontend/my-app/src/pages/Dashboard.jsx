export default function Dashboard({ setIsAuthenticated }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Welcome to Dashboard 🎉</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
