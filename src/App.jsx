import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { NavBar, Welcome, Dock } from "#components";
import {
  Text,
  Finder,
  Resume,
  Safari,
  Terminal,
  Image,
  Contact,
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
    </main>
  );
};

export default App;
