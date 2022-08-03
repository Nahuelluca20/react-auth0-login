import {useAuth0} from "@auth0/auth0-react";
import {Stack, Heading} from "@chakra-ui/react";

import Profile from "./components/profile";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <Stack justifyItems="center" my={5} textAlign="center">
      <Heading>Aplicacion Login/Logout</Heading>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </Stack>
  );
}

export default App;
