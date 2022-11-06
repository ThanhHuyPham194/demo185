import { useNavigate } from 'react-router-dom';
import './RelicsListItem.scss';
export default function RelicsListItem({ relic }) {
  const navigate = useNavigate();
  const handleClickRelicItem = () => {
    navigate("/relics/lang-le-van-duyet");
  };
  return (
    <div className='relicsListItem' onClick={handleClickRelicItem} data-aos="fade">
      <div className="relicsListItem__image">
        <img src={relic.image} alt="" />
      </div>
      <div className="relicsListItem__name">
        <span>{relic.name} </span>
      </div>
      <div className="relicsListItem__year">
        <span>{relic.year} </span>
      </div>
    </div>
  );
}
