import { Text, Button, Input, Flex, Divider, NumberInput } from "@mantine/core";

function SkillsTechComponent() {
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
          Skills & Technologies
        </Text>
        <Divider my="md" />
        <Flex w="100%" direction="column">
          <Text fw={500} mb="lg">
            Add New Skill/Technology
          </Text>
          <Flex align="center" justify="space-between">
            <Input.Wrapper label="Skill/Technology" w="50%">
              <Input size="md" mt="xs" />
            </Input.Wrapper>
            <Input.Wrapper label="Rating">
              <NumberInput mt="xs" min={0} max={100} clampBehavior="strict" />
            </Input.Wrapper>
            <Button mt="xl">Add</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SkillsTechComponent;
