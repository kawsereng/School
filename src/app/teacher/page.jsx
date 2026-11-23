
"use client";

import { useState } from "react";
import Image from "next/image";

const teachers = [
  { name: "Sudhir Chandra Dey", subject: "Head Teacher (In Charge)", phone: "013XXXXXXXX", image: "/image/teacher.webp" },
  { name: "Md. Zahirul Islam", subject: "Bangla", phone: "017XXXXXXXX", image: "/image/teacher.webp" },
  { name: "Sufia Akter", subject: "English", phone: "015XXXXXXXX", image: "/image/teacher.webp" },
  { name: "Md. Mahbubur Rahman", subject: "Mathematics", phone: "017XXXXXXXX", image: "/image/teacher.webp" },
  { name: "Shankari Banik", subject: "Assistant Teacher", phone: "013XXXXXXXX", image: "/image/teacher.webp" },
  { name: "Sabina Yesmin", subject: "Science", phone: "017XXXXXXXX", image: "/image/teacher.webp" },
  { name: "Sharifa Begum", subject: "Social Science", phone: "017XXXXXXXX", image: "/image/teacher.webp" },
  { name: "Sabina Chowdhury", subject: "English", phone: "017XXXXXXXX", image: "/image/teacher.webp" },
  { name: "Teacher Name 09", subject: "ICT", phone: "01XXXXXXXXX", image: "/image/teacher.webp" },
  { name: "Teacher Name 10", subject: "Religion", phone: "01XXXXXXXXX", image: "/image/teacher.webp" },
  { name: "Teacher Name 11", subject: "Mathematics", phone: "01XXXXXXXXX", image: "/image/teacher.webp" },
  { name: "Teacher Name 12", subject: "Bangla", phone: "01XXXXXXXXX", image: "/image/teacher.webp" },
];

const helpers = [
  { name: "Mst Morium ", subject: "Office Assistant", phone: "01XXXXXXXXX", image: "/image/teacher.webp" },
  { name: "Shojib ", subject: "Peon", phone: "01XXXXXXXXX", image: "/image/teacher.webp" },
  { name: "Babul", subject: "Ayah", phone: "01XXXXXXXXX", image: "/image/teacher.webp" },
];

function PersonCard({ person }) {
  return (
    <div className="group flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="80px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0">
        <h3 className="text-base font-bold uppercase leading-6 text-[#00786F]">
          {person.name}
        </h3>

        <p className="mt-1 text-sm font-semibold text-gray-500">
          {person.subject}
        </p>

        <p className="mt-1 break-all text-xs text-gray-500">
          Contact: {person.phone}
        </p>
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900">
        {children}
      </h2>
      <div className="mx-auto mt-3 h-1 w-28 bg-gray-500" />
      <div className="mx-auto h-0.5 w-20 bg-gray-300" />
    </div>
  );
}

export default function TeachersSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleTeachers = showAll
    ? teachers
    : teachers.slice(0, 8);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Teachers */}
        <SectionTitle>Our Teachers</SectionTitle>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleTeachers.map((teacher, index) => (
            <PersonCard key={index} person={teacher} />
          ))}
        </div>

        {/* All Teachers Button */}
        {teachers.length > 8 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-md bg-[#00B8DB] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg"
            >
              {showAll ? "Show Less" : "All Teachers"}
            </button>
          </div>
        )}

        {/* Helpers */}
        <div className="mt-16">
          <SectionTitle>Our Staffs</SectionTitle>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helpers.map((helper, index) => (
              <PersonCard key={index} person={helper} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
