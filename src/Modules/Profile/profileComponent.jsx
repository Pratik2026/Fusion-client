import { Table, Text, Button, Flex, Divider } from "@mantine/core";

function ProfileComponent() {
  return (
    <Flex
      w="60%"
      p="md"
      gap="md"
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
          About Me
        </Text>
        <Divider my="sm" />
        <Flex w="100%" justify="space-between" align="center">
          <Text>N/A</Text>
          <Button bg="red">Edit</Button>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        p="md"
        direction="column"
        style={{ border: "1px solid lightgray", borderRadius: "5px" }}
      >
        <Text fw={500} size="1.2rem">
          Details
        </Text>
        <Divider my="sm" />
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td fw={500}>Date of Birth</Table.Td>
              <Table.Td>Jan 01, 2004</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td fw={500}>Address</Table.Td>
              <Table.Td>XYZ</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Flex>
      <Flex
        w="100%"
        p="md"
        direction="column"
        style={{ border: "1px solid lightgray", borderRadius: "5px" }}
      >
        <Text fw={500} size="1.2rem">
          Contact Details
        </Text>
        <Divider my="sm" />
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td fw={500}>Contact Number</Table.Td>
              <Table.Td>+91 99999 99999</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td fw={500}>Mail ID</Table.Td>
              <Table.Td>abc@gmail.com</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}

export default ProfileComponent;
