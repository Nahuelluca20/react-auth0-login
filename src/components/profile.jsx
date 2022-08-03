import {useAuth0} from "@auth0/auth0-react";
import {Image, Grid, Text, Heading, Stack, Center} from "@chakra-ui/react";

function Profile() {
  const {user, isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
      <Center>
        <Grid
          backgroundColor="#37305C"
          color="white"
          gap={6}
          justifyItems="center"
          mx={5}
          my={10}
          py={20}
          width="400px"
        >
          <Image alt={user.name} borderRadius="full" src={user.picture} width="150px" />
          <Stack>
            <Heading>{user.name}</Heading>
            <Text>Nichname: {user.nickname}</Text>
            <Text>Email: {user.email}</Text>
          </Stack>
        </Grid>
      </Center>
    )
  );
}

export default Profile;
