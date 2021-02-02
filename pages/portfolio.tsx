import Layout from '../components/Layout'
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer'
import SubPage from '../components/SubPage'
import CTA from '../components/CTA'
import MainPortfolio from '../components/portfolio/Portfolio'

const Portfolio = () => {
  return (
    <Layout title="Our Projects | Portfolio - Iris Designs">
      <NavMenu />

      <SubPage
        page_title="Our Portfolio"
        page_description="We have crafted good-looking designs for businesses and made pre-made concept designs"
        page_button_icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        }
        page_button_string="What We Made"
        page_image="/portfolio.svg"
      />

      <hr />

      {/* projects made */}
      <div className="py-12" id="sub-content">
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-gray-700">
            The Projects we have Made...
          </h3>
          <MainPortfolio />
        </div>
      </div>

      <CTA text="Amazed by our projects and designs? Collaborate With Us!" />

      <Footer />
    </Layout>
  )
}

export default Portfolio
