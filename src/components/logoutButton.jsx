import {Flex, Button} from "@chakra-ui/react";
import {useAuth0} from "@auth0/auth0-react";

function LogoutButton() {
  const {logout} = useAuth0();

  return (
    <Flex justifyContent="center">
      <Button colorScheme="red" width="150px" onClick={() => logout()}>
        Logout
      </Button>
    </Flex>
  );
}

export default LogoutButton;
