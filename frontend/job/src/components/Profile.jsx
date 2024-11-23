import React, { useState } from 'react';
import './Profile.css';
export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234-567-890',
    bio: 'I am a software developer with a passion for building web applications.',
    location: 'New York, NY',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  return (
    <section className="profile-section py-5">
      <div className="container">
        <div className="card shadow-sm p-4">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
            {!editMode ? (
              <>
                <h3>{profile.name}</h3>
                <p className="text-muted">{profile.location}</p>
                <p>{profile.bio}</p>
                <p>
                  <strong>Email:</strong> {profile.email} <br />
                  <strong>Phone:</strong> {profile.phone}
                </p>
                <button className="btn btn-primary mt-3" onClick={handleEditToggle}>
                  Edit Profile
                </button>
              </>
            ) : (
              <>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    value={profile.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">
                    Bio
                  </label>
                  <textarea
                    className="form-control"
                    id="bio"
                    name="bio"
                    rows="3"
                    value={profile.bio}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button className="btn btn-success" onClick={handleEditToggle}>
                  Save Changes
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
