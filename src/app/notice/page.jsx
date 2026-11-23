
"use client";
import { useState } from "react";

const notices = [
  {
    id: 1,
    title: "Annual Examination Notice 2026",
    date: "23 Nov 2026",
    category: "Examination",
    description:
      "The annual examination will begin from 10 December 2026. All students are requested to complete their preparation.",
    important: true,
  },
  {
    id: 2,
    title: "Admission Open for 2027",
    date: "20 Nov 2026",
    category: "Admission",
    description:
      "Admission is now open for the academic session 2027. Interested students can collect admission forms from the school office.",
    important: false,
  },
  {
    id: 3,
    title: "School Holiday Announcement",
    date: "18 Nov 2026",
    category: "Holiday",
    description:
      "The school will remain closed on Friday due to a public holiday.",
    important: false,
  },
  {
    id: 4,
    title: "Parent Teacher Meeting",
    date: "15 Nov 2026",
    category: "Meeting",
    description:
      "All parents are requested to attend the upcoming parent teacher meeting at 10:00 AM.",
    important: true,
  },
  {
    id: 5,
    title: "Parent Teacher Meeting",
    date: "15 Nov 2026",
    category: "Meeting",
    description:
      "All parents are requested to attend the upcoming parent teacher meeting at 10:00 AM.",
    important: true,
  },
  {
    id: 6,
    title: "Parent Teacher Meeting",
    date: "15 Nov 2026",
    category: "Meeting",
    description:
      "All parents are requested to attend the upcoming parent teacher meeting at 10:00 AM.",
    important: true,
  },
];

export default function Notice() {
  const [showAll, setShowAll] = useState(false);

  const visibleNotices = showAll
    ? notices
    : notices.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest text-teal-600 uppercase">
            Stay Updated
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3">
            Notice Board
          </h2>

          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Get the latest school announcements, updates and
            important information.
          </p>
        </div>

        {/* Notice List */}
        <div className="grid grid-cols-1 gap-5">
          {visibleNotices.map((notice) => (
            <div
              key={notice.id}
              className="group bg-white border border-slate-200
              rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row
              gap-5 sm:items-center shadow-sm hover:shadow-lg
              hover:border-teal-300 transition duration-300"
            >
              {/* Date */}
              <div className="w-20 h-20 shrink-0 bg-teal-50
                rounded-xl flex flex-col items-center justify-center
                text-teal-700">
                <span className="text-2xl font-bold">
                  {notice.date.split(" ")[0]}
                </span>
                <span className="text-xs font-semibold uppercase">
                  {notice.date.split(" ")[1]}
                </span>
                <span className="text-xs">
                  {notice.date.split(" ")[2]}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-teal-50 text-teal-700
                    text-xs font-semibold px-3 py-1 rounded-full">
                    {notice.category}
                  </span>

                  {notice.important && (
                    <span className="bg-red-50 text-red-600
                      text-xs font-semibold px-3 py-1 rounded-full">
                      Important
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold
                  text-slate-800 group-hover:text-teal-700
                  transition">
                  {notice.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  {notice.description}
                </p>
              </div>

              {/* Button */}
              <div className="shrink-0">
                <a
                  href={`/notices/${notice.id}`}
                  className="inline-flex items-center justify-center
                  gap-2 bg-teal-600 hover:bg-teal-700
                  text-white text-sm font-semibold
                  px-5 py-3 rounded-lg transition w-full sm:w-auto"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less */}
        {notices.length > 5 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-block bg-[#00B8DB]
              hover:bg-teal-700 text-white font-semibold
              px-8 py-3 rounded-lg transition duration-300"
            >
              {showAll ? "Show Less ↑" : "View All Notices →"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
