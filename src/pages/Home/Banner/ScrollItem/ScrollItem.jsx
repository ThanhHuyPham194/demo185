import 'aos/dist/aos.css';
import './ScrollItem.scss';

export default function ScrollItem({ name, desc, index, image }) {


  return (
    <div className='ScrollItem'>
      <img src={image} alt="" />
      <div className="ScrollItem-info">
        <div className="ScrollItem-info-name">{index}. {name}</div>
        <div className="ScrollItem-info-desc">{desc}</div>
      </div>
    </div>
  );
}
