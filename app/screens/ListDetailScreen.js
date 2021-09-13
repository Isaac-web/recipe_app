import React, { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet} from 'react-native';
import { Divider} from 'react-native-paper';


import ChartContainer from '../components/About/ChartContainer';
import Ingredients from '../components/About/Ingredients';
import TopImageBanner from '../components/About/TopImageBanner';

const data = [
    {
        id: 1,
        title: "Title",
        subTitle: "Sub Title"
    },
    {
        id: 2,
        title: "Title",
        subTitle: "Sub Title"
    },
    {
        id: 3,
        title: "Title",
        subTitle: "Sub Title"
    },
    {
        id: 4,
        title: "Title",
        subTitle: "Sub Title"
    }
  ];



  const foodChartData = [
      {
          color: "lightgreen",
          label: "Fibre",
          level: 0.3
      },
      {
          color: "darkred",
          label: "Protien",
          level: 0.1
      },
      {
          color: "pink",
          label: "Vitamins",
          level: 0.2
      },
      {
          color: "yellow",
          label: "Fat",
          level: 0.5
      },
    ]


const foodData = {
    category: "Continental",
    foodChartData: foodChartData,
    imageUri: require("../assets/food-image.jpg"),
    ingredientsList: data,
    subTitle: "Average cooking time",
    title: "One-pan honey garlic chicken",
}
    



export default function ListDetailScreen({ listId }) {   
    const [listDetail, setListDetail] = useState(null);

    useEffect(() => {
        foodData.listId = listId;
        setListDetail(foodData);
    }, []);


    return (
            <ScrollView>
                <View>
                    <TopImageBanner 
                        title={foodData.title} 
                        imageUri={foodData.imageUri} 
                        category={foodData.category}
                    />

                    <Divider/>

                    <Ingredients ingredientsList={data}/>

                    <ChartContainer chartData={foodData.foodChartData}/>
                </View>
            </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0, 
    }
});