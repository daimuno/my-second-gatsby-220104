import * as React from 'react'
import Layout from '../../components/layout'
import RegistrationForm from './registration-form'
const IndexPage = () => {
  return (
    <Layout pageTitle="Member Area">
      
      <div style={{ width: '40%', marginLeft: '30%'}}>
        <h2>Registration</h2>
        <RegistrationForm />
      </div>
    </Layout>
  )
}

export default IndexPage