import { Stack, Text, Card, Image, Flex } from "@mantine/core";
import { useState } from "react";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import ModuleTabs from "../../components/moduleTabs";
import avatarImage from "../../assets/avatar.png";
import ProfileComponent from "./profileComponent";
import SkillsTechComponent from "./skillsComponent";
import AchievementsComponent from "./achievementsComponent";
import WorkExperienceComponent from "./workExperienceComponent";
import EducationCoursesComponent from "./educationCoursesComponent";

function InfoCard() {
  return (
    <Card withBorder shadow="sm" radius="md" w={300}>
      <Card.Section>
        <Image src={avatarImage} h={300} />
      </Card.Section>

      <Card.Section pl="md" mt="sm">
        <Text fw={500} size="md">
          STUDENT NAME
        </Text>
        <Text fw={500} size="md" c="dimmed">
          BRANCH - ROLL_NUMBER
        </Text>
      </Card.Section>
      <Card.Section pl="md" mt="sm">
        <Text fw={500} size="md">
          Program - YEAR
        </Text>
        <Text fw={500} size="md">
          Semester
        </Text>
      </Card.Section>
      <Text mt="xs" c="dimmed" size="sm">
        Student
      </Text>
    </Card>
  );
}

function Profile() {
  const tabItems = [
    { title: "Profile" },
    { title: "Skills & Technologies" },
    { title: "Education & Courses" },
    { title: "Work Experience" },
    { title: "Achievements" },
  ];
  const tabToDisplay = [
    <ProfileComponent />,
    <SkillsTechComponent />,
    <EducationCoursesComponent />,
    <WorkExperienceComponent />,
    <AchievementsComponent />,
  ];
  const [activeTab, setActiveTab] = useState("0");
  return (
    <Stack>
      <CustomBreadcrumbs />
      <ModuleTabs
        tabs={tabItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        badges={[]}
      />
      <Flex align="flex-start" justify="space-evenly" pr="2rem" mt="1rem">
        {tabToDisplay[activeTab]}
        <InfoCard />
      </Flex>
    </Stack>
  );
}

export default Profile;
