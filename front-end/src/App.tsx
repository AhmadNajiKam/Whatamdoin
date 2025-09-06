import "./App.css";
import { useNavigate } from "react-router";
export function App() {
  const navigate = useNavigate();
  const handlePhoneOrNameSubmission = async (formData: FormData) => {
    const phoneOrUserName: string | undefined = formData.get("nameOrNumber")?.toString();
    navigate(`/${phoneOrUserName}`);
  }
  return (
    <div>
      <form action={handlePhoneOrNameSubmission}>
        <label htmlFor="nameOrNumber">Know what your friend is doing by his:
          <input type="text" name="nameOrNumber" placeholder="Phone Number or Username" id="nameOrNumber" />
        </label>
        <button type="submit" >Search</button>
      </form>
    </div>
  );
}
export default App;

