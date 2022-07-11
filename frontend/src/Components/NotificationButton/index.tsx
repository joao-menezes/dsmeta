import icon from '../../assets/img/notify-icon.svg'
import './style.css'

function NotificationButton() {
  return(
    <div>
        <div className="dsmeta-red-btn">
            <img src={icon} alt="" />
        </div>
    </div>
  );
}

export default NotificationButton;