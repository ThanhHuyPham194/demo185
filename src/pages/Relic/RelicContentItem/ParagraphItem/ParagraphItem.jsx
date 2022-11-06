import React from "react";
import ShowMore from "../../../../components/ShowMore/ShowMore";
import "./ParagraphItem.scss";

export default function ParagraphItem({ content }) {
  const positionImage = content?.image?.position;
  const showmoreText = content.showMoreText;
  return (
    <div
      className={`relicContentItem__paragraph ${getImagePosition(
        positionImage
      )}`}
      data-aos="fade-up"
    >
      {content?.image && (
        <div className="relicContentItem__paragraph--image " >
          <img src={content.image.content} alt="" />
        </div>
      )}
      <p
        className="relicContentItem__paragraph--text"
      >
        {content?.highLightText && (
          <span className="greenColor">{content?.highLightText}</span>
        )}
        {content?.normalText}
        {showmoreText && <ShowMore>{showmoreText}</ShowMore>}
      </p>

    </div>
  );
}

function getImagePosition(positionImage) {
  return positionImage === "left"
    ? "imageLeft"
    : positionImage === "right"
      ? "imageRight"
      : "";
}

