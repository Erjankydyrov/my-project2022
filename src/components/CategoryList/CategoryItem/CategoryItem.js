import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";

function CategoryItem({ category }) {
  return (
    <div className={classes.CategoryItem}>
      <Link to={"/categories/" + category.categoryId}>
        <div className={classes.CategoryItemImage}>
          <img src={category.image} alt={category.title} />
          <div className={classes.CategoryItemText}>
            <h3>{category.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
