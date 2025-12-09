import React from "react";
import classes from "./category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href="">
        <div>
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.imageLink} alt="" />
          <p>shop now</p>
        </div>
      </a>
    </div>
  );
}

export default CategoryCard;
