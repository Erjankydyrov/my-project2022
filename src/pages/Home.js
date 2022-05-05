import Header from "../components/Header/Header";
import headerImage from "../assets/home.svg";

function Home() {
  return (
    <>
      <Header 
        title="Welcome to the Eternal War!" 
        image={headerImage}
        boxTitle="Lead your army into battle!"
        boxChildren="Gather your army and show your enemies all your power!">
        An exciting journey awaits you in the world of Spring War, start
        exploring it right now!
      </Header>
    </>
  );
}

export default Home;
