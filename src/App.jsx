import "./assets/css/variables.css";
import "./assets/css/App.css";
import "./assets/css/response.css";
import "./assets/css/materialdesignicons.min.css";
// import "./assets/css/bootstrap.min.css"

import {
  Header,
  CallToAction,
  Achievements,
  Portfolio,
  MyExperience,
  Contact,
  Footer,
  GoUp,
} from "./components";

const App = () => {
  return (
    <div className="container">
      <Header />
      <CallToAction />
      <Achievements />
      <Portfolio />
      <MyExperience />
      <Contact />
      <Footer />
      <GoUp />
    </div>
  );
};

export default App;
