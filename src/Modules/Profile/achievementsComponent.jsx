import {
  Flex,
  Input,
  Divider,
  Text,
  Button,
  Select,
  Textarea,
} from "@mantine/core";

function AchievementsComponent() {
  return (
    <Flex
      w="60%"
      p="md"
      h="auto"
      style={{ border: "1px solid lightgray", borderRadius: "5px" }}
      direction="column"
      justify="space-evenly"
    >
      <Flex
        w="100%"
        p="md"
        direction="column"
        style={{ border: "1px solid lightgray", borderRadius: "5px" }}
      >
        <Text fw={500} size="1.2rem">
          Achievements
        </Text>
        <Divider my="md" />
        <Flex w="100%" direction="column">
          <Text fw={500} mb="md">
            Add a new achievement
          </Text>
          <Flex align="center" justify="space-between" mb="md">
            <Input.Wrapper label="Skill/Technology" w="65%">
              <Input size="md" mt="xs" />
            </Input.Wrapper>
            <Input.Wrapper label="Type" w="30%">
              <Select
                size="md"
                mt="xs"
                data={["Educational", "Other"]}
                defaultValue="Educational"
              />
            </Input.Wrapper>
          </Flex>
          <Flex align="center" justify="space-between" mb="md">
            <Input.Wrapper label="Date" w="30%">
              <Input type="date" size="md" mt="xs" />
            </Input.Wrapper>
            <Input.Wrapper label="Issuer" w="65%">
              <Input size="md" mt="xs" />
            </Input.Wrapper>
          </Flex>
          <Flex align="center" justify="space-between">
            <Input.Wrapper label="Description" w="65%">
              <Textarea autosize minRows={5} resize="vertical" mt="xs" />
            </Input.Wrapper>
            <Button size="md" style={{ alignSelf: "flex-end" }}>
              Submit
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AchievementsComponent;
