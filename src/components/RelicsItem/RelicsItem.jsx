import arrow_right from '../../assets/svg/arrow-right.svg';
import './RelicsItem.scss';
export default function RelicsItem({ content = [], videoSrc }) {
  return (
    <div className='relics-item'>
      <div className="relics-item__video">
        <img src={videoSrc} alt="videoRelics"></img>
      </div>
      <div className="relics-item__info">
        <p className="title">Thông tin di tích</p>
        {content?.map(e => <p key={e} className="content">{e}</p>)}
        <div className="button">
          <p>Xem chi tiết</p>
          <img src={arrow_right} alt="arrow_svg" />
        </div>
      </div>
    </div>
  );
}
  