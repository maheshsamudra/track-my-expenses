import React from "react"
import { Link } from "gatsby"

import Layout from "../Layout"
import SEO from "../components/seo"

import styles from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
