import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../../components/layout'
import "./color.css"
import {
  grid3col,
  contentLinkText,
  navstyle,
  allpage,
  relaxfont,
  handwrite,
  textaboveimage,
} from '../../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Admisi">
      <h2 className={relaxfont}>Join Electrical Engineering WMSCU</h2>
      <div className={handwrite}>We'd love for you to join us...</div>

      <div className={grid3col}>
        <div>
          <Link to="./pendaftaran">
            <StaticImage
              alt="Daftar"
              src="../../images/admisi/daftar.png"
            />
            <div className="c1">Registration</div>
          </Link>
          
        </div>

        <div>
          <Link to="./beasiswa">
            <StaticImage
              alt="Beasiswa"
              src="../../images/admisi/beasiswa.png"
            />
            <div className="c2">Scholarship</div>
          </Link>
          
        </div>

        <div>
          <Link to="../contact-us">
            <StaticImage
              alt="Beasiswa"
              src="../../images/admisi/kontak.png"
            />
          <div className="c3">Contact Us</div>
          </Link>
          
        </div>

      </div>

    </Layout>
  )
}

export default IndexPage