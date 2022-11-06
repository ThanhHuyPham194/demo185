import { useState } from "react";
import { useDispatch } from "react-redux";
import useModal from "../../../../hooks/useModal";
import { setFilterDistrictRelics } from "../../../../store/reducers/relicsReducers";
import { districts } from "../../constants/constants";
import "./RelicsFilterAddress.scss";

export default function RelicsFilterAddress() {
  const [filterAddess, setFilterAddress] = useState(0);
  const { show, setShow, nodeRef } = useModal();
  const dispatch = useDispatch();

  const handleClickOption = (e) => {
    const code = e.target.getAttribute("data-code") * 1;
    setFilterAddress(code);
    dispatch(setFilterDistrictRelics(code));
  };
  return (
    <div
      className="relicsFilterAddress"
      onClick={() => {
        setShow(!show);
      }}
      ref={nodeRef}
    >
      <div className="relicsFilterAddress__text" data-aos="fade">
        {findNameAdress(filterAddess)}
      </div>
      {show && (
        <>
          <div className="relicsFilterAddress__select">
            {districts &&
              districts.map((district) => {
                return (
                  <div
                    key={district.code}
                    className="relicsFilterAddress__select--option"
                    data-code={district.code}
                    onClick={handleClickOption}
                  >
                    {district.name}
                  </div>
                );
              })}
          </div>
          <div className="relicsFilterAddress__triangle"></div>
        </>
      )}

      <svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.4522 10.0462C6.51336 10.135 6.5952 10.2076 6.69066 10.2578C6.78613 10.308 6.89236 10.3342 7.0002 10.3342C7.10805 10.3342 7.21428 10.308 7.30974 10.2578C7.40521 10.2076 7.48704 10.135 7.5482 10.0462L13.5482 1.3795C13.6177 1.27953 13.6584 1.16245 13.666 1.04097C13.6735 0.919483 13.6477 0.798245 13.5912 0.690425C13.5347 0.582606 13.4498 0.492328 13.3456 0.429402C13.2414 0.366475 13.1219 0.333305 13.0002 0.333497L1.0002 0.333497C0.878764 0.333999 0.759761 0.367595 0.655989 0.430672C0.552217 0.49375 0.467604 0.583922 0.411248 0.691492C0.354892 0.799062 0.328925 0.91996 0.336141 1.04118C0.343357 1.16241 0.383483 1.27937 0.452202 1.3795L6.4522 10.0462Z"
          fill="#69FFC9"
        />
      </svg>
    </div>
  );
}

function findNameAdress(code) {
  return districts.filter((district) => district.code === code)[0]?.name;
}
