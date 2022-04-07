import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import signoutHandler from "../../services/signoutHandler";
import "./styles.css";

const UserProfilePage = () => {
  const {
    auth: { user },
    setAuth,
  } = useAuth();
  const navigate = useNavigate();

  const { email, firstName, lastName } = user;
  return (
    <main class="nav-fixed-adjust">
      <div class="user-card">
        <div class="avatar-container">
          <img
            class="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt="avatar"
          />
          <div class="avatar-details">
            <div class="avatar-subtitle">Hi,</div>
            <div class="avatar-title">
              {firstName} {lastName}
            </div>
          </div>
        </div>
        <div class="user-card-details">
          <div class="user-card-title">
            <div class="text-md">Personal Details</div>
          </div>
          <div class="detail">
            <div class="text-xs">Name</div>
            <div class="text-sm">
              {firstName} {lastName}
            </div>
          </div>
          <div class="detail">
            <div class="text-xs">Email</div>
            <div class="text-sm">{email}</div>
          </div>
          <div class="user-card-title detail">
            <div>
              <div class="text-xs">Default Address</div>
              <div class="text-sm">21 Ranch Road, Mumbai, MH</div>
            </div>
            <button class="btn btn-transparent btn-sm">Edit</button>
          </div>
        </div>
        <div class="user-card-details">
          <div class="user-card-title">
            <div class="text-md">Orders</div>
            <button class="btn btn-transparent btn-sm">View</button>
          </div>
        </div>
        <button
          class="btn btn-primary btn-sm"
          onClick={() => signoutHandler(setAuth, navigate)}
        >
          Sign Out
        </button>
      </div>
    </main>
  );
};

export default UserProfilePage;
