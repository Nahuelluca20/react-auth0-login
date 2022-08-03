import {Flex, Button} from "@chakra-ui/react";
import {useAuth0} from "@auth0/auth0-react";

function LoginButton() {
  const {loginWithRedirect} = useAuth0();

  return (
    <Flex justifyContent="center">
      <Button colorScheme="green" width="150px" onClick={() => loginWithRedirect()}>
        Login
      </Button>
    </Flex>
  );
}

export default LoginButton;
