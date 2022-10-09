import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Container, HomeLink, HomeTitle } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <section>
      <Container>
        {isLoggedIn ? (
          <HomeTitle>
            Thank you for choosing us, you can now add your number!
          </HomeTitle>
        ) : (
          <HomeTitle>
            Welcome, my Friend! Here you create your
            own phonebook where you can keep all your contacts. <HomeLink to="register">Sign up</HomeLink> or{' '}
            <HomeLink to="login">Log in</HomeLink>.
          </HomeTitle>
        )}
      </Container>
    </section>
  );
};

export default Home;