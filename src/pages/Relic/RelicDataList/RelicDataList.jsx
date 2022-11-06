import { relicsData } from "../constants/constants";
import RelicDataItem from "../RelicDataItem/RelicDataItem";

export default function RelicDataList() {
  return (
    <div className="relicDataList" >
      {relicsData.map((relicData) => {
        return (
          <RelicDataItem
            key={relicData.id}
            noneBorderTop={relicData.id > 1 ? true : false}
            title={relicData.title}
            content={relicData.content}
          >
            
          </RelicDataItem>
        );
      })}
      </div>
  );
}
