import { Formpage } from "./components/formPage/formpage";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Formpage/>
      <Toaster
        position="top-center"
        toastOptions={{ className: "toast-display", duration: 2000 }}
      />  
    </div>
  );
}

export default App;
