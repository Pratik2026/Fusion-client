import { useState } from "react";
import { Table, Text, Button, Flex, Divider, TextInput } from "@mantine/core";

function ProfileComponent() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    about: "N/A",
    dob: "Jan 01, 2004",
    address: "XYZ",
    contactNumber: "+91 99999 99999",
    mailId: "abc@gmail.com",
  });

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Flex
      w="60%"
      p="md"
      gap="md"
      style={{ border: "1px solid lightgray", borderRadius: "5px" }}
      direction="column"
      justify="space-evenly"
    >
      {/* About Me Section */}
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
          {isEditing ? (
            <TextInput
              value={profileData.about}
              onChange={(e) => handleChange("about", e.target.value)}
              w="80%"
            />
          ) : (
            <Text>{profileData.about}</Text>
          )}
          <Button onClick={handleEditClick} color={isEditing ? "green" : "red"}>
            {isEditing ? "Save" : "Edit"}
          </Button>
        </Flex>
      </Flex>

      {/* Details Section */}
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
              <Table.Td>
                {isEditing ? (
                  <TextInput
                    value={profileData.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                  />
                ) : (
                  profileData.dob
                )}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td fw={500}>Address</Table.Td>
              <Table.Td>
                {isEditing ? (
                  <TextInput
                    value={profileData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                  />
                ) : (
                  profileData.address
                )}
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Flex>

      {/* Contact Details Section */}
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
              <Table.Td>
                {isEditing ? (
                  <TextInput
                    value={profileData.contactNumber}
                    onChange={(e) =>
                      handleChange("contactNumber", e.target.value)
                    }
                  />
                ) : (
                  profileData.contactNumber
                )}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td fw={500}>Mail ID</Table.Td>
              <Table.Td>
                {isEditing ? (
                  <TextInput
                    value={profileData.mailId}
                    onChange={(e) => handleChange("mailId", e.target.value)}
                  />
                ) : (
                  profileData.mailId
                )}
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}

export default ProfileComponent;
