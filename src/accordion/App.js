import "./App.css";
import Accordion from "./Accordion";
import { useState } from "react";

function App() {
  const [expand, setExpand] = useState(false);

  const accordion = [
    { id: 1, title: "title 1", content: "lorem ipsum" },
    { id: 2, title: "title 2", content: "ipsum lorem" },
  ];

  function executeExpand(id) {
    if (expand === id) {
      setExpand(null);
    } else setExpand(id);
  }
  return (
    <>
      {accordion.map((item, i) => (
        <Accordion
          key={i}
          title={item.title}
          content={item.content}
          id={item.id}
          expand={expand}
          executeExpand={executeExpand}
        />
      ))}
    </>
  );
}

export default App;
