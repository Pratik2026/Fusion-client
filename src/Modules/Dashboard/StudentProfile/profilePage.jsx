import { Stack, Text, Card, Image, Flex } from "@mantine/core";
import { useState, useEffect } from "react";
import axios from "axios";
import CustomBreadcrumbs from "../../../components/Breadcrumbs";
import ModuleTabs from "../../../components/moduleTabs";
import avatarImage from "../../../assets/avatar.png";
import ProfileComponent from "./profileComponent";
import SkillsTechComponent from "./skillsComponent";
import AchievementsComponent from "./achievementsComponent";
import WorkExperienceComponent from "./workExperienceComponent";
import EducationCoursesComponent from "./educationCoursesComponent";
import { getProfileDataRoute } from "../../../routes/dashboardRoutes";

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
  const [activeTab, setActiveTab] = useState("0");
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const token = localStorage.getItem("authToken");
      if (!token) return console.error("No authentication token found!");
      try {
        const response = await axios.get(getProfileDataRoute, {
          headers: { Authorization: `Token ${token}` },
        });
        setProfileData(response.data);
      } catch (err) {
        setError("Error fetching profile data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const tabItems = [
    { title: "Profile" },
    { title: "Skills & Technologies" },
    { title: "Education & Courses" },
    { title: "Work Experience" },
    { title: "Achievements" },
  ];
  const tabToDisplay = [
    <ProfileComponent data={profileData?.profile} />,
    <SkillsTechComponent skills={profileData?.skills} />,
    <EducationCoursesComponent
      education={profileData?.education}
      courses={profileData?.course}
    />,
    <WorkExperienceComponent experience={profileData?.experience} />,
    <AchievementsComponent
      achievements={profileData?.achievement}
      publications={profileData?.publication}
      patents={profileData?.patent}
    />,
  ];

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

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
        <InfoCard data={profileData?.user} />
      </Flex>
    </Stack>
  );
}

export default Profile;
