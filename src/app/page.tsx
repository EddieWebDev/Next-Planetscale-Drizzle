import getRandomReview from '@/lib/getRandomReview'
import Review from '@/components/Review'
export default async function Home() {
  const randomReview = await getRandomReview()

  return (
    <Review {...randomReview} />
  )
}
