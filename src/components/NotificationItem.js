import { useMemo } from "react";
import "./NotificationItem.css";
const NotificationItem = ({
  avatar,
  phoenixBaker,
  joinedYourTeam,
  melbourneStartupsGrowth,
  propOpacity,
}) => {
  const notificationItemStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div className="notification-item10" style={notificationItemStyle}>
      <div className="content105">
        <div className="avatar-label-group13">
          <img className="avatar-icon21" alt="" src={avatar} />
          <div className="text-and-supporting-text34">
            <div className="text135">
              <span className="phoenix-baker">{phoenixBaker}</span>
              <span className="joined-your-team">{joinedYourTeam}</span>
              <span className="phoenix-baker">{melbourneStartupsGrowth}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
