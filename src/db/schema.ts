import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  unique,
  int,
  varchar,
  index,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const categories = mysqlTable(
  "categories",
  {
    id: int("id").autoincrement().notNull(),
    category: varchar("category", { length: 255 }).notNull(),
  },
  (table) => {
    return {
      categoriesId: primaryKey(table.id),
      category: unique("category").on(table.category),
    };
  }
);

export const movies = mysqlTable(
  "movies",
  {
    id: int("id").autoincrement().notNull(),
    movie: varchar("movie", { length: 255 }).notNull(),
  },
  (table) => {
    return {
      moviesId: primaryKey(table.id),
      movie: unique("movie").on(table.movie),
    };
  }
);

export const products = mysqlTable(
  "products",
  {
    id: int("id").autoincrement().notNull(),
    productName: varchar("product_name", { length: 240 }),
    productPrice: int("product_price"),
  },
  (table) => {
    return {
      productsId: primaryKey(table.id),
    };
  }
);

export const reviews = mysqlTable(
  "reviews",
  {
    id: int("id").autoincrement().notNull(),
    review: varchar("review", { length: 255 }).notNull(),
    movieId: int("movie_id").notNull(),
    categoryId: int("category_id").notNull(),
  },
  (table) => {
    return {
      categoryIdIdx: index("category_id_idx").on(table.categoryId),
      movieIdIdx: index("movie_id_idx").on(table.movieId),
      reviewsId: primaryKey(table.id),
      review: unique("review").on(table.review),
    };
  }
);
