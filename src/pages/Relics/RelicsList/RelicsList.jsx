import { relicsData } from "../constants/constants";
import "./RelicsList.scss";
import RelicsListItem from "./RelicsListItem/RelicsListItem";

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
export default function RelicsList() {
  const { filter } = useSelector((state) => state.relics);

  const [relicItems, setRelicItems] = useState(relicsData);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setRelicItems(filterRelicItems(filter).slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filterRelicItems(filter).length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {

    const newOffset =
      (event.selected * itemsPerPage) % filterRelicItems(filter).length;

    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setRelicItems(filterRelicItems(filter).slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filterRelicItems(filter).length / itemsPerPage));

  }, [filter.search, filter.district, filter.sort, filter.category]);

  return (
    <>
      <div className="relicsList">
        {relicItems &&
          relicItems.map((relicData) => {
            return <RelicsListItem key={relicData.id} relic={relicData} />;
          })}
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={0}
        className={"relicsListPaginate"}
        activeLinkClassName={"relicsListPaginate__activePage"}
      />
    </>
  );
}

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  str = str.replace(/ + /g, " ");
  str = str.trim();
  return str;
}

function filterRelicItems(filter) {
  let relics = [];
  if (filter.search.length === 0) {
    relics = relicsData;
  } else {
    relics = relicsData.filter((relic) =>
      removeVietnameseTones(relic.name.toLowerCase()).includes(
        removeVietnameseTones(filter.search.toLowerCase())
      )
    );
  }
  if (filter.district) {
    console.log(filter.district);
    relics = relics.filter((relic) => relic.district === filter.district);
  }
  relics = handleSortRelics(relics, filter.sort);
  if (filter.category.length > 0) {
    console.log("da vao");
    relics = relics.filter((relic) => filter.category.includes(relic.category));
  }

  return relics;
}

function handleSortRelics(relics, sort) {
  if (sort.length === 0) return relics;
  if (sort === "az") {
    return relics.sort((relic1, relic2) => {
      const name1 = removeVietnameseTones(relic1.name);
      const name2 = removeVietnameseTones(relic2.name);
      return name1 !== name2 ? (name1 < name2 ? -1 : 1) : 0;
    });
  }
  if (sort === "za") {
    return relics.sort((relic1, relic2) => {
      const name1 = removeVietnameseTones(relic1.name);
      const name2 = removeVietnameseTones(relic2.name);
      return name1 !== name2 ? (name1 < name2 ? 1 : -1) : 0;
    });
  }
  if (sort === "newest") {
    return relics.sort((relic1, relic2) => relic1.year !== relic2.year ? (relic1.year < relic2.year ? 1 : -1) : 0);
  }
  if (sort === "oldest") {
    return relics.sort((relic1, relic2) => relic1.year !== relic2.year ? (relic1.year < relic2.year ? -1 : 1) : 0);
  }

}
function handleDate(date, query) {
  if (query === "get-year") {
    return date.slice(6, 10) * 1;
  }
  if (query === "get-month") {
    return date.slice(3, 5) * 1;
  }
  if (query === "get-day") {
    return date.slice(0, 2) * 1;
  }
}
