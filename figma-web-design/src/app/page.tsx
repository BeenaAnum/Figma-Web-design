import React from "react";
import Header from "@/components/Header";
import ProfileSection from "@/components/Profile";
import RecentPosts from "@/components/RecentPost";
import FeaturedWorks from "@/components/Works";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
        <Header />
        <ProfileSection />
        <RecentPosts />
        <FeaturedWorks />
      <Footer />
    </div>
  );
}