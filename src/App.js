import Products from "./components/Products/Products";

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shoppign Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main"><Products/></div>
          <div className="sidebar">Cart section</div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
}

export default App;
