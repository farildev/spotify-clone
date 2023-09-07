import React from 'react';
import Section from '../components/Section';

const Home = () => {
  const items = [
    {
      id: 1,
      title : "Release Radar",
      description : "Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday",
      image : "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb3ea02df5c7da4979e883d19b/en-GB",
      type : "Album"
    },
    {
      id: 1,
      title : "David Kushner",
      description : "Artist",
      image : "https://i.scdn.co/image/ab67616100005174f6a68d90ef0bb84219e3499a",
      type : "artist"
    },
    {
      id: 1,
      title : "Barış Özcan ile 111Hz",
      description : "Podbee Media",
      image : "https://i.scdn.co/image/ab67656300005f1f15dbc1cba8d088bfbba170c1",
      type : "podcast"
    },
    {
      id: 1,
      title : "The Weeknd",
      description : "Artist",
      image : "https://i.scdn.co/image/ab67616100005174214f3cf1cbe7139c1e26ffbb",
      type : "artist"
    },
    {
      id: 1,
      title : "R&B Mix",
      description : "Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday",
      image : "https://seed-mix-image.spotifycdn.com/v6/img/r_and_b/4qXC0i02bSFstECuXP2ZpL/en-GB/default",
      type : "album"
    },
  ]
  return (
    <div>
      <Section
        title="Recently Played"
        more = "/"
        items = {items}
      />
      <Section
        title="Your top mixes"
        more = "/"
        items = {items}
      />
      <Section
        title="Shows that you might like"
        more = "/"
        items = {items}
      />
    </div>
  )
}

export default Home