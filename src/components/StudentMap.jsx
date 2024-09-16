// File: components/StudentMap.js
"use client";

import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { usStatesData } from "../data/us-states";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const StudentMap = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleMarkerClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>
        {students.map((student) => {
          const state = usStatesData.find((s) => s.state === student.state);
          if (state) {
            return (
              <Marker
                key={student.id}
                coordinates={[state.longitude, state.latitude]}
                onClick={() => handleMarkerClick(student)}
              >
                <circle r={5} fill="#F00" />
              </Marker>
            );
          }
          return null;
        })}
      </ComposableMap>
      {selectedStudent && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          <h3>{selectedStudent.name}</h3>
          <p>School: {selectedStudent.school}</p>
          <p>City: {selectedStudent.city}</p>
          <p>State: {selectedStudent.state}</p>
          <button onClick={() => setSelectedStudent(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default StudentMap;
