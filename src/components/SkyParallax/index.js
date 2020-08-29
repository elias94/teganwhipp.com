import React from 'react'
import RandomSeed from 'random-seed'

import ParallaxScene from '../ParallaxScene.js'
import ParallaxLayer from '../ParallaxLayer.js'
import ImageElement from '../ImageElement'

import { SkyParallaxContainer } from './styles'

import Moon from '../../assets/moon3.png'
import Moons from '../../assets/moons.png'
import Mushroom1 from '../../assets/mushroom1.png'
import Mushroom3 from '../../assets/mushroom3.png'
import Mushroom4 from '../../assets/mushroom4.png'
import Mushroom5 from '../../assets/mushroom5.png'
import Mushroom6 from '../../assets/mushroom6.png'
import Star1 from '../../assets/star1.png'
import Star2 from '../../assets/star2.png'
import Star3 from '../../assets/star3.png'
import Star4 from '../../assets/star4.png'
import Star5 from '../../assets/star5.png'
import Star6 from '../../assets/star6.png'
import Star7 from '../../assets/star7.png'
import Star8 from '../../assets/star8.png'
import Star9 from '../../assets/star9.png'
import Planet1 from '../../assets/planet1.png'
import Planet2 from '../../assets/planet2.png'
import Planet3 from '../../assets/planet3.png'
import PointGold1 from '../../assets/pointgold1.png'
import PointGold2 from '../../assets/planetgold2.png'
import PointBlue1 from '../../assets/pointblue1.png'
import PointBlue2 from '../../assets/pointblue2.png'
import PointBlue3 from '../../assets/pointblue3.png'
import PointBlue4 from '../../assets/pointblue4.png'
import PointYellow1 from '../../assets/pointyellow1.png'
import Shape1 from '../../assets/shape1.png'
import Shape2 from '../../assets/shape2.png'
import Falls from '../../assets/falls.png'
import Eyes1 from '../../assets/eyes1.png'
import Eyes2 from '../../assets/eyes2.png'

const RANDOM_SEED = 'eliathebest_94'
const NUMBER_OF_SKY_POINTS = 200

const GeneratePoints = () => {
  const skyPoints = []
  const pointsObjs = [
    PointGold1, PointGold2, PointBlue1,
    PointBlue2, PointBlue3, PointBlue4,
  ]
  const pLen = pointsObjs.length

  const rand = RandomSeed.create()
  rand.seed(RANDOM_SEED)
  
  for (let i = 0; i < NUMBER_OF_SKY_POINTS; i++)
  {
    skyPoints.push({
      obj: pointsObjs[rand(pLen)],
      depth: rand.floatBetween(0.05, 0.1),
      bottom: rand.intBetween(2, 98).toString(),
      right: rand.intBetween(2, 98).toString(),
      width: rand.intBetween(8, 12),
    })
  }

  return skyPoints
}

export default function SkyParallax() {
  const points = GeneratePoints()

  return (
    <SkyParallaxContainer>
      <ParallaxScene>
        {/* POINTS */}
        {points.map(({obj, depth, bottom, right, width}, i) => (
          <ParallaxLayer depth={depth}>
            <ImageElement key={`ImageElement_${i}`} src={obj} bottom={`${bottom}%`} right={`${right}%`} width={`${width}px`} />
          </ParallaxLayer>
        ))}
        <ParallaxLayer depth={0.12}>
          <ImageElement src={PointYellow1} bottom="32%" right="26%" width="10px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.0}>
          <ImageElement src={Mushroom3} top="20%" left="0" width="300px" />
        </ParallaxLayer>
        {/* PLANETS */}
        <ParallaxLayer depth={0.05}>
          <ImageElement src={Planet1} top="25%" left="15%" width="130px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.15}>
          <ImageElement src={Planet2} top="25%" left="75%" width="100px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.25}>
          <ImageElement src={Planet3} bottom="27%" right="32%" width="80px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.26}>
          <ImageElement src={Star4} top="45%" left="15%" width="70px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.35}>
          <ImageElement src={Star5} top="30%" left="22%" width="60px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.25}>
          <ImageElement src={Star6} top="80%" left="52%" width="95px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.55}>
          <ImageElement src={Star7} top="10%" left="12%" width="65px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.15}>
          <ImageElement src={Star8} top="40%" left="80%" width="90px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.18}>
          <ImageElement src={Star9} top="10%" left="25%" width="70px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.40}>
          <ImageElement src={Moons} top="12%" left="35%" width="140px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.30}>
          <ImageElement src={Star1} top="15%" left="67%" width="80px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.30}>
          <ImageElement src={Star2} bottom="30%" right="70%" width="40px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.35}>
          <ImageElement src={Star3} bottom="10%" right="30%" width="50px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.10}>
          <ImageElement src={Moon} top="27%" left="32%" width="600px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.10}>
          <ImageElement src={Shape1} bottom="-3%" right="30%" width="500px" height="170px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.10}>
          <ImageElement src={Shape1} bottom="-3%" right="50%" width="500px" height="170px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.10}>
          <ImageElement src={Shape2} bottom="-3%" right="40%" width="350px" height="170px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.30}>
          <ImageElement src={Mushroom4} bottom="-9%" right="70%" width="450px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.20}>
          <ImageElement src={Mushroom5} bottom="0" right="45%" width="150px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.30}>
          <ImageElement src={Mushroom6} bottom="0px" right="50%" width="200px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.35}>
          <ImageElement src={Shape1} bottom="-6%" right="40%" width="500px" height="170px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.40}>
          <ImageElement src={Shape2} bottom="-6%" right="60%" width="350px" height="170px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.45}>
          <ImageElement src={Shape1} bottom="-6%" right="62%" width="550px" height="190px" style={{ backgroundRepeat: 'repeat-x' }} />
        </ParallaxLayer>
        <ParallaxLayer depth={0.60}>
          <ImageElement src={Mushroom1} bottom="-85px" right="55%" width="315px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.10}>
          <ImageElement src={Falls} bottom="-2%" right="-10%" width="500px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.16}>
          <ImageElement src={Eyes1} bottom="6%" right="-8%" width="315px" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.25}>
          <ImageElement src={Eyes2} bottom="-20%" right="-4%" width="315px" />
        </ParallaxLayer>
      </ParallaxScene>
    </SkyParallaxContainer>
  )
}
