import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileInfo from "../components/profile/ProfileInfo";
import SkillCard from "../components/profile/SkillCard";
import ChangePassword from "../components/profile/ChangePassword";
import MyCertificates from "../components/profile/MyCertificates";

const Profile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data.user);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProfile();

  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-slate-950 min-h-screen py-12 px-6">

        <div className="max-w-7xl mx-auto space-y-8">

          <ProfileHeader user={user} />

          <ProfileStats user={user} />

          <div className="grid lg:grid-cols-2 gap-8">

            <ProfileInfo user={user} />

            <SkillCard />

          </div>

          <MyCertificates />

          <ChangePassword />

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Profile;