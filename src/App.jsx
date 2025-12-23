import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { NavBar, Welcome, Dock } from "#components";
import { Text, Finder, Resume, Safari, Terminal, Image } from "#windows";

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
    </main>
  );
};

export default App;
