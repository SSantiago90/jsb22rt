import "./App.css";
import ButtonChilds from "./components/clase_03/Button2";
import BlogContainer from "./components/clase_03/BlogContainer";
import ImageClass from "./components/clase_02/Image_class";
import Counter from "./components/clase_03/Counter";
import TodoList from "./components/clase_03/TodoList";

function App() {
  return (
    <>
      <h1>Clase 3 State</h1>
      <ImageClass imgurl="http://placekitten.com/200/300" circled={true} />
      <BlogContainer />
      <br />
      <br />
      <TodoList />
      <ButtonChilds onTouch={() => console.log("modificando color con state")}>
        Cambio de color
      </ButtonChilds>
      <Counter max={6} />
    </>
  );
}

export default App;
