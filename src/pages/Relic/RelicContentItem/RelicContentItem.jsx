import React from "react";
import ParagraphItem from "./ParagraphItem/ParagraphItem";
import ShowMore from "../../../components/ShowMore/ShowMore";
import "./RelicContentItem.scss";
import RelicDataList from "../RelicDataList/RelicDataList";
export default function RelicContentItem({
  title,
  contents,
  contentsShowMore,
  video,
  data
}) {
  return (
    <div className="relicContentItem" data-aos="fade-up">
      <span className="relicContentItem__title" >{title}</span>
      {contents &&
        contents.map((content) => {
          return <ParagraphItem key={content.id} content={content} />;
        })}

      {contentsShowMore && (
        <ShowMore>
          {contentsShowMore.map((content) => {
            return <ParagraphItem key={content.id} content={content} />;
          })}
        </ShowMore>
      )}
      {video && (
        <video width="100%" height="420px" controls src={video}></video>
      )}
      {
        data &&
        <RelicDataList></RelicDataList>
      }
    </div>
  );
}
