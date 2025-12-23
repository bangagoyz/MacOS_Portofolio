import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { NavBar, Welcome, Dock, Home } from "#components";
import {
  Text,
  Finder,
  Resume,
  Safari,
  Terminal,
  Image,
  Contact,
  Photos,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Home />
    </main>
  );
};

export default App;
