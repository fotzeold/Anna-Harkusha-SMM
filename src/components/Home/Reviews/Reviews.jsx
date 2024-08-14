import "./Reviews.scss"
import 'swiper/css';
import 'swiper/css/pagination';

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { avatarMob } from "../../../service/image";

const Reviews = ({ t }) => {
	const reviewsList = t('reviews.list', { returnObjects: true });


	return (
		<section className="reviews">
			<div className="container">
				<h2>{t("reviews.title")}</h2>
				<Swiper
					slidesPerView={1}
					spaceBetween={40}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						880: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						1290: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{
						reviewsList && reviewsList.map((review, i) => {
							return (
								<SwiperSlide key={i}>
									<div className="review">
										<div className="review__photo">
											<img src={review.img} alt="user-photo" />
										</div>
										<div className="review__user">{review.user}</div>
										<div className="review__text">{review.text}</div>
									</div>
								</SwiperSlide>
							)
						})
					}
				</Swiper>
			</div>
		</section >
	)
}

export default Reviews