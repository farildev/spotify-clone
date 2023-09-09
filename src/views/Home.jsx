import React from 'react';
import Section from '../components/Section';
import songs from "../data/songs";

const Home = () => {
  return (
    <div>
      <Section
        title="Recently Played"
        more = "/"
        items = {songs}
      />
      <Section
        title="Your top mixes"
        more = "/"
        items = {songs}
      />
      <Section
        title="Shows that you might like"
        more = "/"
        items = {songs}
      />
    </div>
  )
}

export default Home