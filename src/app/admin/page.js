import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const fetchAdmissions = async () => {
      const res = await fetch('/api/admissions');
      const data = await res.json();
      setAdmissions(data);
    };

    fetchAdmissions();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        {admissions.map((admission) => (
          <div key={admission._id}>
            <h3>{admission.name}</h3>
            <p>{admission.fatherName}</p>
            {/* Add more fields here */}
          </div>
        ))}
      </div>
    </div>
  );
}
