import { useQuery } from "@apollo/client";
import { Container, Grid, Text, Spacer } from '@nextui-org/react';
import recommendedProfilesQuery from '../queries/recommendedProfilesQuery.js';
import Profile from '../components/Profile.js';

export default function Home() {
  const { loading, error, data } = useQuery(recommendedProfilesQuery);

  if (loading) return 'Loading..';
  if (error) return `Error! ${error.message}`;

  return (
       <Container justify="right" alignItems='center'>
      <div >
        <Text
          h1
          size={60}
          css={{
            textAlign: "center",
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold">
          [ Road To Web3 LENS Api ]
        </Text>
        <Spacer y={5} />

        {data.recommendedProfiles.map((profile, index) => {
          console.log(`Profile ${index}:`, profile);
          return <Profile key={profile.id} profile={profile} displayFullProfile={false} />;
        })}
      </div>
      </Container>
  )
}