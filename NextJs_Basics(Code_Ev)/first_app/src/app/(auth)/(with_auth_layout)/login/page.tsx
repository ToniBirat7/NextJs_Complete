export default function Login() {
  return (
    <form className="flex flex-col gap-10">
      <label htmlFor="username">Username:</label>
      <input type="text" placeholder="Input usernamer" id="password"></input>

      <label htmlFor="password">Password:</label>
      <input type="text" placeholder="Input usernamer" id="password"></input>
    </form>
  );
}
