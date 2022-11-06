import useToggle from "../../hooks/useToggle";
import "./ShowMore.scss";

export default function ShowMore({ children, setIsMore, isMore }) {
  const { nodeRef, nodeContentRef, onToggle, getToggleProps } = useToggle();
  const handleSetIsMore = () => {
    if (setIsMore) {
      setIsMore(!isMore);
    }
  };
  return (
    <div className="showMore" data-testid="ShowMoreElem" onClick={handleSetIsMore}>
      <div className={`showMore__children`} ref={nodeContentRef}>
        {children}
      </div>
      <div className="showMore__button" {...getToggleProps({ ref: nodeRef })}>
        <span className="showMore__button--text">
          {onToggle ? "Thu gọn" : "Xem thêm"}
        </span>
        <div
          className={`showMore__button--icon ${onToggle ? "" : "showMore__button--icon-unActive"}`}
        >
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4701 5.97149C1.20975 6.23184 0.787643 6.23184 0.527293 5.97149C0.266944 5.71114 0.266944 5.28903 0.527293 5.02868L4.52729 1.02868C4.78764 0.768327 5.20975 0.768327 5.4701 1.02868L9.4701 5.02868C9.73045 5.28903 9.73045 5.71114 9.4701 5.97149C9.20975 6.23183 8.78764 6.23183 8.52729 5.97149L4.9987 2.44289L1.4701 5.97149Z"
              fill="#69FFC9"
            />
          </svg>
        </div>
      </div>
    </div>

  );
}

