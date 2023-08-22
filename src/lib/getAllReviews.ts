import { connect } from "@planetscale/database";
import { config } from "@/db/config";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { reviews, movies, categories } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getAllReviews(): Promise<Review[]> {
  const conn = connect(config);
  const db = drizzle(conn);

  const results: Review[] = await db
    .select({
      review: reviews.review,
      movie: movies.movie,
      category: categories.category,
    })
    .from(reviews)
    .innerJoin(movies, eq(reviews.movieId, movies.id))
    .innerJoin(categories, eq(reviews.movieId, categories.id));

  return results;
}
