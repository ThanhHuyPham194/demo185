import React, { useEffect, useState } from "react";
import NewsItem from "../../../components/NewsItem/NewsItem";
import news1 from '../../../assets/imgs/news/activity1.png';
import news2 from '../../../assets/imgs/news/activity2.png';
import news3 from '../../../assets/imgs/news/activity3.png';
import news4 from '../../../assets/imgs/news/activity4.png';
import news5 from '../../../assets/imgs/news/relics5.png';
import news6 from '../../../assets/imgs/news/activity6.png';
import "./News.scss";
import MainButton from "../../../components/MainButton/MainButton";
import icon from '../../../assets/svg/vecto.svg';
import { Link } from "react-router-dom";
export default function News() {

  return (
    <div className="news" >
      <div className="container">
        <div className="news__title">
          <h2 className="title" >Tin tức</h2>
        </div>
        <div className="news__content">
          <div className="news__content--left" data-aos="fade-right">
            <NewsItem src={news1} main="Thông báo kết quả xét tuyển viên chức năm 2022" sub="13/05 - 29/05/2022" gap={16} redirect="/news/activity" >
              <div className="newsItem__img--child"></div>
              <div className="newsItem__img--child"></div>
              <div className="newsItem__img--child"></div>
              <div className="newsItem__img--child"></div>
            </NewsItem>
            <NewsItem src={news2} main="Thông báo triệu tập thí sinh tham dự vòng 2 xét tuyển viên chức năm 2021" sub="13/05 - 29/05/2022" gap={16} redirect="/news/activity" >
              <div className="newsItem__img--child" style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80")`
              }}></div>
              <div className="newsItem__img--child"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80")`
                }}
              ></div>
              <div className="newsItem__img--child"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80")`
                }}
              ></div>
              <div className="newsItem__img--child"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80")`
                }}
              ></div>
            </NewsItem>
          </div>
          <div className="news__content--right" >
            <div className="itemWrapper" data-aos="fade-left">
              <NewsItem src={news3} main="Thông báo kết quả xét tuyển viên chức năm 2021" sub="04/02/2021" gap={16} top={20} width={288} height={162} redirect="/news/relics" />
            </div>
            <div className="itemWrapper" data-aos="fade-left">
              <NewsItem src={news4} main="Quyết định phê duyệt kết quả xét tuyển viên chức năm 2020" sub="03/02/2021" gap={16} top={20} width={288} height={162} redirect="/news/relics" />
            </div>
            <div className="itemWrapper" data-aos="fade-left">
              <NewsItem src={news5} main="Thông báo kết quả xét tuyển viên chức năm 2020" sub="08/12/2020" gap={16} top={20} width={288} height={162} redirect="/news/propagate" />
            </div>
            <div className="itemWrapper" data-aos="fade-left">
              <NewsItem src={news6} main="Thông báo triệu tập thí sinh tham dự vòng 2 xét tuyển viên chức năm 2020" sub="13/05 - 29/05/2022" gap={16} top={20} width={288} height={162} redirect="/news/propagate" />
            </div>
          </div>
        </div>
        <div className="news__button">
          <Link to="/news" style={{ color: 'white' }}>
            <MainButton src={icon} width={198} height={48}>Xem tất cả</MainButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
