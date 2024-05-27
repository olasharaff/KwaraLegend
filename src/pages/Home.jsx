import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import BlogPostCard from '../components/BlogPostCard'

export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <BlogPostCard/>
    </Layout>
  )
}
