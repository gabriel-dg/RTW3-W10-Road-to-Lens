import Link from "next/link";
import { Card, Grid, Text, Row, Col, Button } from '@nextui-org/react';


export default function Profile(props) {
  const profile = props.profile;

  // When displayFullProfile is true, we show more info.
  const displayFullProfile = props.displayFullProfile;

  return (
    <Grid.Container  center gap={2} justify="center">
      <Grid xs={12} sm={8} justify="center">
        {/* <div className="p-8"> */}
        <Card css={{ w: "100%", p: "$4", mw: "600px" }}>
          <Card.Header >

            <Grid.Container gap={0} >
              <Grid xs={10} >
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-bold">
                  {profile.handle}
                  {displayFullProfile &&
                    profile.name &&
                    " (" + profile.name + ")"}
                </div>
              </Grid >
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-bold">
                <Grid xs={12} >
                  Id: {profile.id}
                </Grid>
              </div>
            </Grid.Container>

          </Card.Header>
          <Card.Divider />

          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                {profile.picture ? (
                  <img
                    src={
                      profile.picture.original
                        ? profile.picture.original.url
                        : profile.picture.uri
                    }
                    className="h-48 w-full object-cover md:h-full md:w-48"
                  />
                ) : (
                  <div
                    style={{
                      backgrondColor: "gray",
                    }}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                  />
                )}
              </div>

              <div className="p-8">

                <div className="p-0 block mt-1 text-sm leading-tight font-medium text-black">
                  {profile.bio}

                </div>
                <Card.Divider />
                <div className="block mt-1 text-sm leading-tight font-medium text-black">

                  <br></br>
                  Total Posts: {profile.stats.totalPosts}
                  <br></br>
                  Total Publications: {profile.stats.totalPublications}
                </div>
              </div>
            </div>
          </div>

          <Card.Divider />
          <Card.Footer
            isBlurred
            css={{
              height: "50px",
              // width: "auto",
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text weight="bold" color="#073A1F" size={14}>
                  Following: {profile.stats.totalFollowing}
                </Text>
                <Text weight="bold" color="#073A1F" size={14}>
                  Followers: {profile.stats.totalFollowers}
                </Text>
              </Col>
              <Col>
                <Text weight="semibold" color="#073A1F" size={12}>
                  {profile.ownedBy}
                </Text>
              </Col>

              <Col>
                <Row justify="flex-end">
                  <Link href={`/profile/${profile.id}`}>
                    <Button flat auto rounded color="secondary">
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        POSTS
                      </Text>
                    </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        {/* </div> */}
      </Grid>
    </Grid.Container>
  );
}