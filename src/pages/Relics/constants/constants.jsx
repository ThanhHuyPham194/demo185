import imageCategory1 from "../../../assets/imgs/categoryHeading1.png";
import imageCategory2 from "../../../assets/imgs/categoryHeading2.png";
import imageCategory3 from "../../../assets/imgs/categoryHeading3.png";
import imageCategoryColor1 from "../../../assets/imgs/categoryHeadingColor1.png";
import imageCategoryColor2 from "../../../assets/imgs/categoryHeadingColor2.png";
import imageCategoryColor3 from "../../../assets/imgs/categoryHeadingColor3.png";
import relicPaginate1 from "../../../assets/imgs/relicPaginate1.png";
import relicPaginate2 from "../../../assets/imgs/relicPaginate2.png";
import relicPaginate3 from "../../../assets/imgs/relicPaginate3.png";
import { v4 as uuidv4 } from "uuid";


export const headingCategories = [{
    id: 1,
    name: "Cấp di tích quốc gia đặc biệt",
    image: imageCategory1,
    imageColor: imageCategoryColor1,
},
{
    id: 2,
    name: "Cấp di tích quốc gia",
    image: imageCategory2,
    imageColor: imageCategoryColor2,
},
{
    id: 3,
    name: "Cấp di tích thành phố",
    image: imageCategory3,
    imageColor: imageCategoryColor3,
},
];
export const districts = [
    { code: 0, name: "Tất cả" },
    { code: 1, name: "Thành phố Thủ Đức" },
    { code: 2, name: "Quận 1" },
    { code: 3, name: "Quận 3" },
    { code: 4, name: "Quận 4" },
    { code: 5, name: "Quận 5" },
    { code: 6, name: "Quận 6" },
    { code: 7, name: "Quận 7" },
    { code: 8, name: "Quận 8" },
    { code: 9, name: "Quận 10" },
    { code: 10, name: "Quận 11" },
    { code: 11, name: "Quận 12" },
    { code: 12, name: "Quận Bình Tân" },
    { code: 13, name: "Quận Bình Thạnh" },
    { code: 14, name: "Quận Gò Vấp" },
    { code: 15, name: "Quận Phú Nhuận" },
    { code: 16, name: "Quận Tân Bình" },
    { code: 17, name: "Quận Tân Phú" },
    { code: 18, name: "Huyện Bình Chánh" },
    { code: 19, name: "Huyện Cần Giờ" },
    { code: 20, name: "Huyện Củ Chi" },
    { code: 21, name: "Huyện Hóc Môn" },
    { code: 22, name: "Huyện Nhà Bè" },
];


export const sorts = [
    { code: "az", name: "Từ A đến Z" },
    { code: "za", name: "Từ Z đến A" },
    { code: "newest", name: "Mới nhất" },
    { code: "oldest", name: "Cũ nhất" },
];

export const relicsData = [
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐỊA ĐẠO CỦ",
        year: 1893,
        image: relicPaginate1,
        category: 1,
        district: 1,
        dateSaved: "01/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ",
        year: 1893,
        image: relicPaginate2,
        district: 2,
        category: 1,
        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "LĂNG LÊ VĂN DUYỆT",
        year: 1920,
        image: relicPaginate3,
        district: 2,
        category: 1,
        dateSaved: "23/08/2021"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ",
        year: 1893,
        image: relicPaginate2,
        district: 3,
        category: 1,
        dateSaved: "23/07/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐỊA ĐẠO CỦ CHI1",
        year: 1920,
        image: relicPaginate1,
        district: 3,
        category: 2,

        dateSaved: "23/07/2022"
    },
    {
        id: uuidv4(),
        name: "LĂNG LÊ VĂN DUYỆT",
        year: 1893,
        image: relicPaginate3,
        district: 3,
        category: 2,

        dateSaved: "23/07/2022"
    },
    {
        id: uuidv4(),
        name: "LĂNG LÊ VĂN DUYỆT",
        year: 1893,
        image: relicPaginate3,
        district: 3,
        category: 2,

        dateSaved: "23/07/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐỊA ĐẠO CỦ CHI",
        year: 1893,
        image: relicPaginate1,
        district: 1,
        category: 2,

        dateSaved: "01/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ",
        year: 1893,
        image: relicPaginate2,
        district: 2,
        category: 2,

        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐỊA ĐẠO CỦ CHI1",
        year: 1893,
        image: relicPaginate1,
        district: 1,
        category: 2,

        dateSaved: "01/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ",
        year: 1893,
        image: relicPaginate2,
        district: 2,
        category: 2,

        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "LĂNG LÊ VĂN DUYỆT",
        year: 1920,
        image: relicPaginate3,
        district: 2,
        category: 2,

        dateSaved: "23/08/2021"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ",
        year: 1893,
        image: relicPaginate2,
        district: 3,
        category: 3,
        dateSaved: "23/07/2022"
    },


    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ",
        year: 1893,
        image: relicPaginate2,
        district: 2,
        category: 3,

        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐỊA ĐẠO CỦ CHI",
        year: 1893,
        image: relicPaginate1,
        category: 3,
        district: 1,
        dateSaved: "01/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ",
        year: 1893,
        image: relicPaginate2,
        category: 3,
        district: 2,
        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "LĂNG LÊ VĂN DUYỆT",
        year: 1920,
        image: relicPaginate3,
        category: 3,
        district: 2,
        dateSaved: "23/08/2021"
    },

    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ34",
        year: 1893,
        image: relicPaginate2,
        category: 3,
        district: 2,
        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ34",
        year: 1893,
        image: relicPaginate2,
        category: 3,
        district: 2,
        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ34",
        year: 1893,
        image: relicPaginate2,
        category: 3,
        district: 2,
        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ35",
        year: 1893,
        image: relicPaginate2,
        category: 3,
        district: 2,
        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "KHU DI TÍCH ĐÌNH PHONG PHÚ36",
        year: 1893,
        image: relicPaginate2,
        category: 3,
        district: 2,
        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "A",
        year: 1893,
        image: relicPaginate2,
        category: 3,
        district: 2,
        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "BC",
        category: 3,
        year: 1893,
        image: relicPaginate2,
        district: 2,
        dateSaved: "05/09/2022"
    },
    {
        id: uuidv4(),
        name: "BE",
        category: 3,
        year: 1893,
        image: relicPaginate2,
        district: 2,
        dateSaved: "05/09/2022"
    },
];