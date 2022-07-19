import { Card, Spacer, Avatar, User, Grid, Text, Row, Col, Button, Divider } from '@nextui-org/react';
import { Container } from 'postcss';

export default function Post(props) {
  const post = props.post;

  return (


    <Grid.Container class="place-items-center">

      <Grid>
        <Card css={{ p: "$10", mw: "500px", boxShadow: '0 0 0 3px blueviolet', paddingTop: 20, margin: 20, }}>

          <Card.Header>
            <Text
              size={12}
              weight="bold"
              color="#FFA07A"
            >
              Date: {post.createdAt}
            </Text>
          </Card.Header>
          <Divider />
          <Card.Body>
            <Text
              size={14}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="semibold"
            >
              {post.metadata.content}
            </Text>
          </Card.Body>
          <Divider />
          <Card.Footer>
            <Row>
              <Col>
                <Text size={12} color="#7CFC00">
                  Upvotes: {post.stats.totalUpvotes}
                </Text>
              </Col>
              <Col>
                <Text size={12} color="#7CFC00">
                  Downvotes: {post.stats.totalDownvotes}
                </Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}