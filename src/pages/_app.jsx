import "tailwindcss/tailwind.css";

const App = (props) => {
  return <props.Component {...props.pageProps} />;
};

export default App;
