import { useDispatch } from "react-redux";
import { setFilterSearchRelics } from "../../../../store/reducers/relicsReducers";
import "./RelicsFilterSearch.scss";

export default function RelicsFilterSearch() {
  const dispatch = useDispatch();

  return (
    <div className="relicsFilterSearch" data-aos="fade">
      <input
        type="text"
        placeholder="Di tích"
        onChange={(e) => dispatch(setFilterSearchRelics(e.target.value))}
      />
      <svg
        width="26"
        height="27"
        viewBox="0 0 26 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 25.493L19.3335 19.6997M22.4737 11.9574C22.4737 14.8635 21.3425 17.6505 19.3289 19.7054C17.3154 21.7603 14.5844 22.9148 11.7368 22.9148C8.88925 22.9148 6.1583 21.7603 4.14475 19.7054C2.1312 17.6505 1 14.8635 1 11.9574C1 9.05131 2.1312 6.26425 4.14475 4.20934C6.1583 2.15444 8.88925 1 11.7368 1C14.5844 1 17.3154 2.15444 19.3289 4.20934C21.3425 6.26425 22.4737 9.05131 22.4737 11.9574Z"
          stroke="#69FFC9"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
