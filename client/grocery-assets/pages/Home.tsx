import AppPromoBanner from "../../src/components/Home/AppPromoBanner"
import Features from "../../src/components/Home/Features"
import Hero from "../../src/components/Home/Hero"
import HomeCategories from "../../src/components/Home/HomeCategories"
import Newsletter from "../../src/components/Home/Newsletter"
import PopularProducts from "../../src/components/Home/PopularProducts"

const Home = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Hero />
      <Features />
      <HomeCategories />
      <PopularProducts />
      <AppPromoBanner />
      <Newsletter />
    </div>
  )
}

export default Home