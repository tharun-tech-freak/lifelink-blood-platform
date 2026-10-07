import { useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export default function AdminDashboard() {
  const [requester, setRequester] = useState({
    name: "",
    bloodGroup: "",
    age: "",
    phone: "",
    city: "",
  });

  const [bloodBank, setBloodBank] = useState({
    name: "",
    city: "",
    contactPerson: "",
    phone: "",
    email: "",
  });

  const [msg, setMsg] = useState("");

  const handleRequesterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/requesters`, requester);
      setMsg("Requester registered successfully!");
      setRequester({ name: "", bloodGroup: "", age: "", phone: "", city: "" });
    } catch (err) {
      setMsg(
        err.response?.data?.message || "Failed to register requester."
      );
    }
  };

  const handleBloodBankSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/blood-banks`, bloodBank);
      setMsg("Blood bank registered successfully!");
      setBloodBank({
        name: "",
        city: "",
        contactPerson: "",
        phone: "",
        email: "",
      });
    } catch (err) {
      setMsg(
        err.response?.data?.message || "Failed to register blood bank."
      );
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Admin Dashboard</h1>
      {msg && (
        <div
          style={{
            padding: 10,
            marginBottom: 20,
            backgroundColor: msg.includes("successfully") ? "#d4edda" : "#f8d7da",
            color: msg.includes("successfully") ? "#155724" : "#721c24",
            borderRadius: 4,
          }}
        >
          {msg}
        </div>
      )}

      <h2>Register Requester</h2>
      <form onSubmit={handleRequesterSubmit} style={{ marginBottom: 40 }}>
        <div style={{ marginBottom: 10 }}>
          <label>Name</label>
          <input
            style={{ width: "100%", padding: 8 }}
            value={requester.name}
            onChange={(e) =>
              setRequester({ ...requester, name: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Blood Group</label>
          <input
            style={{ width: "100%", padding: 8 }}
            value={requester.bloodGroup}
            onChange={(e) =>
              setRequester({ ...requester, bloodGroup: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Age</label>
          <input
            type="number"
            style={{ width: "100%", padding: 8 }}
            value={requester.age}
            onChange={(e) =>
              setRequester({ ...requester, age: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Phone</label>
          <input
            style={{ width: "100%", padding: 8 }}
            value={requester.phone}
            onChange={(e) =>
              setRequester({ ...requester, phone: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>City</label>
          <input
            style={{ width: "100%", padding: 8 }}
            value={requester.city}
            onChange={(e) =>
              setRequester({ ...requester, city: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>
          Register Requester
        </button>
      </form>

      <h2>Register Blood Bank</h2>
      <form onSubmit={handleBloodBankSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Name</label>
          <input
            style={{ width: "100%", padding: 8 }}
            value={bloodBank.name}
            onChange={(e) =>
              setBloodBank({ ...bloodBank, name: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>City</label>
          <input
            style={{ width: "100%", padding: 8 }}
            value={bloodBank.city}
            onChange={(e) =>
              setBloodBank({ ...bloodBank, city: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Contact Person</label>
          <input
            style={{ width: "100%", padding: 8 }}
            value={bloodBank.contactPerson}
            onChange={(e) =>
              setBloodBank({ ...bloodBank, contactPerson: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Phone</label>
          <input
            style={{ width: "100%", padding: 8 }}
            value={bloodBank.phone}
            onChange={(e) =>
              setBloodBank({ ...bloodBank, phone: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input
            type="email"
            style={{ width: "100%", padding: 8 }}
            value={bloodBank.email}
            onChange={(e) =>
              setBloodBank({ ...bloodBank, email: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>
          Register Blood Bank
        </button>
      </form>
    </div>
  );
}