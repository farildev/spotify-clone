import React from 'react';
import Section from '../components/Section';

const Home = () => {
  const items = [
    {
      id: 1,
      title : "Release Radar",
      artist : "James McCarthy",
      description : "Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday",
      image : "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb3ea02df5c7da4979e883d19b/en-GB",
      type : "Album",
      src : "https://cdn.freesound.org/previews/702/702110_1531809-lq.mp3"
    },
    {
      id: 2,
      title : "David Kushner",
      artist : "David Kushner",
      description : "Artist",
      image : "https://i.scdn.co/image/ab67616100005174f6a68d90ef0bb84219e3499a",
      type : "artist",
      src: 'https://freesound.org/data/previews/612/612092_7037-lq.mp3'
    },
    {
      id: 3,
      title : "Barış Özcan ile 111Hz",
      description : "Podbee Media",
      artist : "Barış Özcan",
      image : "https://i.scdn.co/image/ab67656300005f1f15dbc1cba8d088bfbba170c1",
      type : "podcast",
      src: 'https://freesound.org/data/previews/612/612087_1648170-lq.mp3'
    },
    {
      id: 4,
      title : "The Weeknd",
      artist : "The Weekend",
      description : "Artist",
      image : "https://i.scdn.co/image/ab67616100005174214f3cf1cbe7139c1e26ffbb",
      type : "artist",
      src: 'https://freesound.org/data/previews/612/612085_28867-lq.mp3'
    },
    {
      id: 5,
      title : "Starboy",
      artist : "The Weeknd",
      description : "2016 - Album",
      image : "https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452",
      type : "album",
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
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