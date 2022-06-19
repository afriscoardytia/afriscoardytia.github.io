import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { About } from "./Pages/About/about";
import { Contact } from "./Pages/Contact/contact";
import { MyProject } from "./Pages/MyProject/my-project";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="my-project" element={<MyProject />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
