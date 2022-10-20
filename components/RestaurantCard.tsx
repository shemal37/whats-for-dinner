import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import googleMapsIcon from "../public/images/maps-icon.svg";
import yelpIcon from "../public/images/yelp-icon.svg";
import FullStarIcon from "../public/images/star-full-icon.svg";

interface RestaurantProps {
  restaurant: any;
}

const RestaurantCard: FC<RestaurantProps> = ({ restaurant }) => {
  const {
    name,
    user_ratings_total,
    rating,
    priceLevel,
    website,
    url = "",
    yelp,
    yelpSite,
  } = restaurant;

  return (
    <>
      <div className="restaurant-card__container">
        <h2 className="restaurant-card__name --hw">{name}</h2>
        <h4 className="restaurant-card__price-level --hw">
          {priceLevelMap(priceLevel)}
        </h4>
        <div className="restaurant-card__reviews-container">
          <Link
            href={{
              pathname: url,
            }}
            passHref
          >
            <a>
              <Image
                width={30}
                height={30}
                src={googleMapsIcon}
                alt="Google Maps Icon"
              />
            </a>
          </Link>
          <div className="restaurant-card__google-review-count">
            {user_ratings_total}
          </div>
          <div className="restaurant-card__google-review-rating">{rating}</div>
        </div>
        <div className="restaurant-card__reviews-container">
          <Link
            href={{
              pathname: yelpSite,
            }}
            passHref
          >
            <a>
              <Image width={30} height={30} src={yelpIcon} alt="Yelp Icon" />
            </a>
          </Link>

          <div className="restaurant-card__yelp-review-count">
            {yelp.user_ratings_total}
          </div>
          <div className="restaurant-card__yelp-review-rating">
            {yelp.rating}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;

const priceLevelMap = (level: number) => {
  if (level === 1) return "$";
  if (level === 2) return "$$";
  if (level === 3) return "$$$";
  if (level === 4) return "$$$$";
  return "";
};
