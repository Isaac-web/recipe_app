import React from 'react'
import { StyleSheet } from 'react-native';

import TileList from '../components/TileList';


const data = [
    {
      id: 1,
      title: "This is a title",
      subTitle: "Category",
      imageUri: require("../assets/food-image.jpg")
    },
    {
      id: 2,
      title: "This is a title",
      subTitle: "Category",
      imageUri: require("../assets/food-image.jpg")
    },
    {
      id: 3,
      title: "This is a title",
      subTitle: "Category",
      imageUri: require("../assets/food-image.jpg")
    }
  ]
  

export default function FeedScreen() {
    return <TileList data={data} />;
}

const styles = StyleSheet.create({})
