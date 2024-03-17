"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";
import Link from "next/link";

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About HR TECH
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Us?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        This data-driven approach, leveraging modern technologies, ensures efficient HR processes and streamlined expense management, paving the way for continued innovation and success within the organization.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <Link href="/attritute">
          <AboutCard title="Reducing Attrition" description="Utilize natural language processing techniques to analyze employee feedback from surveys, performance reviews, and communication channels to gauge their satisfaction levels and predict potential resignations." subTitle={""}/>
        </Link>
        <Link href="http://localhost:8501">
          <AboutCard title="Leveraging External Data for Hiring" description="Utilize predictive analytics tools that analyze external data such as social media activity, online behavior, and professional networks to identify potential candidates who match the desired profile." subTitle={""}/>
        </Link>
        
        <div className="md:col-span-2  ">
          <Link href="/expense">
            <AboutCard
              title="Expense Management System:"
              description="Implement integrated expense management software that allows employees to easily submit, track, and manage their expenses in a centralized system." subTitle={""}          />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
