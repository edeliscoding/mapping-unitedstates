// File: app/page.js
"use client";
import { useState } from "react"; // NEW: Added useState import
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
  // NEW: Added state for search term
  const [searchTerm, setSearchTerm] = useState("");

  // NEW: Added function to filter students based on search term
  const filteredStudents = studentsData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.school.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Medical Students Map</h1>
      <div className="flex w-full">
        <div className="w-1/3 pr-4">
          <h2 className="text-2xl font-semibold mb-4">Student List</h2>
          {/* NEW: Added search input */}
          <input
            type="text"
            placeholder="Search by name or school"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 mb-4 border rounded text-gray-800"
          />
          <ul className="space-y-2">
            {/* NEW: Changed studentsData to filteredStudents */}
            {filteredStudents.map((student) => (
              <li key={student.id} className="border p-2 rounded">
                <strong>{student.name}</strong>
                <br />
                {student.school}, {student.city}, {student.state}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3">
          {/* NEW: Pass filteredStudents instead of studentsData */}
          <StudentMap students={filteredStudents} />
        </div>
      </div>
    </main>
  );
}
