import { Layout, Header, Hero } from "./components";
import SetupProcess from "./components/SetupProcess";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <SetupProcess completedSteps={1} totalSteps={6} />
    </Layout>
  );
}

export default App;
