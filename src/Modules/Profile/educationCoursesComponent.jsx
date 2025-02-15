import { Flex, Input, Tabs, Text, Button, Textarea } from "@mantine/core";

function EducationTab() {
  return (
    <Flex
      w="100%"
      p="md"
      direction="column"
      style={{ border: "1px solid lightgray", borderRadius: "5px" }}
    >
      <Flex w="100%" direction="column">
        <Text fw={500} mb="md">
          Add a New Educational Qualification
        </Text>
        <Flex align="center" justify="space-between" mb="md">
          <Input.Wrapper label="Degree" w="48%">
            <Input size="md" mt="xs" />
          </Input.Wrapper>
          <Input.Wrapper label="Stream" w="48%">
            <Input size="md" mt="xs" />
          </Input.Wrapper>
        </Flex>
        <Flex align="center" justify="space-between" mb="md">
          <Input.Wrapper label="Institute Name" w="65%">
            <Input size="md" mt="xs" />
          </Input.Wrapper>
          <Input.Wrapper label="Grade" w="30%">
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
        <Button size="md" w="fit-content" mt="lg">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}

function CoursesTab() {
  return (
    <Flex
      w="100%"
      p="md"
      direction="column"
      style={{ border: "1px solid lightgray", borderRadius: "5px" }}
    >
      <Flex w="100%" direction="column">
        <Text fw={500} mb="md">
          Add a New Certification Course
        </Text>
        <Flex align="center" justify="space-between" mb="md">
          <Input.Wrapper label="Course Name" w="65%">
            <Input size="md" mt="xs" />
          </Input.Wrapper>
          <Input.Wrapper label="License Number" w="30%">
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

function EducationCoursesComponent() {
  return (
    <Flex
      w="60%"
      p="md"
      h="auto"
      style={{ border: "1px solid lightgray", borderRadius: "5px" }}
      direction="column"
      justify="space-evenly"
    >
      <Tabs defaultValue="education">
        <Tabs.List mb="sm">
          <Tabs.Tab value="education">
            <Text fw={500} size="1.2rem">
              Education
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="courses">
            <Text fw={500} size="1.2rem">
              Certificate Courses
            </Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="education">
          <EducationTab />
        </Tabs.Panel>
        <Tabs.Panel value="courses">
          <CoursesTab />
        </Tabs.Panel>
      </Tabs>
    </Flex>
  );
}

export default EducationCoursesComponent;
