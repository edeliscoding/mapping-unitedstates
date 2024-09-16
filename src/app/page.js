// File: app/page.js
"use client";

import { useState } from "react";
import StudentMap from "../components/StudentMap";

const studentsData = [
  {
    id: 1,
    name: "John Doe",
    school: "University of Washington",
    city: "Seattle",
    state: "WA",
  },
  {
    id: 2,
    name: "Jane Smith",
    school: "UCLA",
    city: "Los Angeles",
    state: "CA",
  },
  {
    id: 3,
    name: "Mike Johnson",
    school: "Harvard Medical School",
    city: "Boston",
    state: "MA",
  },
  {
    id: 4,
    name: "Emily Brown",
    school: "Mayo Clinic School of Medicine",
    city: "Rochester",
    state: "MN",
  },
  {
    id: 5,
    name: "Chris Wilson",
    school: "Johns Hopkins University",
    city: "Baltimore",
    state: "MD",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentsData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.school.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
        Medical Students Map
      </h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/3 pr-0 md:pr-4 mb-4 md:mb-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Student List
          </h2>
          <input
            type="text"
            placeholder="Search by name or school"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <ul className="space-y-2 max-h-60 md:max-h-96 overflow-y-auto">
            {filteredStudents.map((student) => (
              <li key={student.id} className="border p-2 rounded">
                <strong>{student.name}</strong>
                <br />
                {student.school}, {student.city}, {student.state}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3 h-[300px] md:h-auto">
          <StudentMap students={filteredStudents} />
        </div>
      </div>
    </main>
  );
}
