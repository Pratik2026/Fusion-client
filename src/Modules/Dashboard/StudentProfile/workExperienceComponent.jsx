import {
  Flex,
  Input,
  Tabs,
  Text,
  Button,
  Select,
  Textarea,
} from "@mantine/core";

function InternshipsTab() {
  return (
    <Flex
      w="100%"
      p="md"
      direction="column"
      style={{ border: "1px solid lightgray", borderRadius: "5px" }}
    >
      <Flex w="100%" direction="column">
        <Text fw={500} mb="md">
          Add a New Internship
        </Text>
        <Flex align="center" justify="space-between" mb="md">
          <Input.Wrapper label="Organization Name" w="65%">
            <Input size="md" mt="xs" />
          </Input.Wrapper>
          <Input.Wrapper label="Location" w="30%">
            <Input size="md" mt="xs" />
          </Input.Wrapper>
        </Flex>
        <Flex align="center" justify="space-between" mb="md">
          <Input.Wrapper label="Job Profile Title" w="65%">
            <Input size="md" mt="xs" />
          </Input.Wrapper>
          <Input.Wrapper label="Status" w="30%">
            <Select
              size="md"
              mt="xs"
              data={["Ongoing", "Completed"]}
              defaultValue="Ongoing"
            />
          </Input.Wrapper>
        </Flex>
        <Flex align="center" justify="space-between" mb="md">
          <Input.Wrapper label="Start Date" w="48%">
            <Input type="date" size="md" mt="xs" />
          </Input.Wrapper>
          <Input.Wrapper label="End Date" w="48%">
            <Input type="date" size="md" mt="xs" />
          </Input.Wrapper>
        </Flex>
        <Flex align="center" justify="space-between">
          <Input.Wrapper label="Description" w="80%">
            <Textarea autosize minRows={5} resize="vertical" mt="xs" />
          </Input.Wrapper>
          <Button size="md" style={{ alignSelf: "flex-end" }}>
            Submit
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

function ProjectsTab() {
  return (
    <Flex
      w="100%"
      p="md"
      direction="column"
      style={{ border: "1px solid lightgray", borderRadius: "5px" }}
    >
      <Flex w="100%" direction="column">
        <Text fw={500} mb="md">
          Add a New Project
        </Text>
        <Flex align="center" justify="space-between" mb="md">
          <Input.Wrapper label="Project Name" w="65%">
            <Input size="md" mt="xs" />
          </Input.Wrapper>
          <Input.Wrapper label="Status" w="30%">
            <Select
              size="md"
              mt="xs"
              data={["Ongoing", "Completed"]}
              defaultValue="Ongoing"
            />
          </Input.Wrapper>
        </Flex>
        <Flex align="center" justify="space-between" mb="md">
          <Input.Wrapper label="Project Link" w="100%">
            <Input size="md" mt="xs" />
          </Input.Wrapper>
        </Flex>
        <Flex align="center" justify="space-between" mb="md">
          <Input.Wrapper label="Start Date" w="48%">
            <Input type="date" size="md" mt="xs" />
          </Input.Wrapper>
          <Input.Wrapper label="End Date" w="48%">
            <Input type="date" size="md" mt="xs" />
          </Input.Wrapper>
        </Flex>
        <Flex align="center" justify="space-between">
          <Input.Wrapper label="Description" w="80%">
            <Textarea autosize minRows={5} resize="vertical" mt="xs" />
          </Input.Wrapper>
          <Button size="md" style={{ alignSelf: "flex-end" }}>
            Submit
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

function WorkExperienceComponent() {
  return (
    <Flex
      w="60%"
      p="md"
      h="auto"
      style={{ border: "1px solid lightgray", borderRadius: "5px" }}
      direction="column"
      justify="space-evenly"
    >
      <Tabs defaultValue="internships">
        <Tabs.List mb="sm">
          <Tabs.Tab value="internships">
            <Text fw={500} size="1.2rem">
              Internships
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="projects">
            <Text fw={500} size="1.2rem">
              Projects
            </Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="internships">
          <InternshipsTab />
        </Tabs.Panel>
        <Tabs.Panel value="projects">
          <ProjectsTab />
        </Tabs.Panel>
      </Tabs>
    </Flex>
  );
}

export default WorkExperienceComponent;
