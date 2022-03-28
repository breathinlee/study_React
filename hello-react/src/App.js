import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <div>
      <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
      <Counter />
      <br />
      <Say />
      <br />
      <EventPractice />
    </div>
  )
};

export default App;