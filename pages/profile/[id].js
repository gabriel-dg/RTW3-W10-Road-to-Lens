import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import fetchProfileQuery from "../../queries/fetchProfileQuery.js";
import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";
import { Card, Spacer, Avatar, User, Grid, Text, Row, Col, Button, Divider } from '@nextui-org/react';

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("fetching profile for", id);
  const { loading, error, data } = useQuery(fetchProfileQuery, {
    variables: {
      request: { profileId: id },
      publicationsRequest: {
        profileId: id,
        publicationTypes: ["POST"],
      },
    },
  });

  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
        <Text
          // h3
          size={40}
          css={{
            textAlign: "center",
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold">
          -[ Posts by {id} ]-
        </Text>
        <Spacer y={0} />

      <div className="flex flex-col p-8 items-center justify-center">
        <Profile profile={data.profile} displayFullProfile={true} />
        {data.publications.items.map((post, idx) => {
          return <Post key={idx} post={post} />;
        })}
      </div>
    </div>
  );
}