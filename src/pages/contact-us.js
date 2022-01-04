import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import ContactForm from './contact-form';
import SimpleMap from './maps'
import { Container, Row, Col } from 'react-grid-system';
import {
  container,
  detailtext
} from '../components/page.module.css'
const IndexPage = () => {
  return (
    <Layout pageTitle="Contact Us">
      <Container>
        <Row>
          <Col sm={6}>
              <h2>Contact Us</h2>
              <div className={detailtext}>
                <div>Universitas Katolik Widya Mandala Surabaya</div>
                <div>Kampus Kalijudan</div>
                <div>Jl. Kalijudan No. 37, Surabaya 60114, East Java, Indonesia</div>
                <div>Office hour: 08.00 – 16.00 (Senin – Jumat)</div>
                <div>email : hod-electreng@ukwms.ac.id</div>
              </div>
          </Col>

          <Col sm={6}>
              <h2>Form</h2>
              <ContactForm />
          </Col>

        </Row>
      </Container>
      <p> </p>
      <p> </p>
      <p> </p>
      <iframe style={{ height: '60vh', width: '60%', marginLeft: '20%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.829823674936!2d112.77170781487553!3d-7.260199873344545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f98603853c77%3A0x5b20decbd6a39031!2sUniversitas%20Katolik%20Widya%20Mandala%20Surabaya%20-%20Kalijudan!5e0!3m2!1sid!2sid!4v1639727553441!5m2!1sid!2sid"></iframe>
    </Layout>
  )
}

export default IndexPage