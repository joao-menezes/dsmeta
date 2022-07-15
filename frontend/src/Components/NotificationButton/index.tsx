import axios from 'axios';
import icon from '../../assets/img/notify-icon.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
    saleId: number;
}

function handleClick(saleId: number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`)
    .then(res => {
        console.log(res);
    })
}

function NotificationButton({saleId}: Props) {
  return(
    <div>
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="" />
        </div>
    </div>
  );
}

export default NotificationButton;