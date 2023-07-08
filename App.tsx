import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export const chartConfigs = [
  {
    backgroundColor: '#cce7e8',
    backgroundGradientFrom: '#000',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(5, 255, 156, ${opacity})`,
    style: {
      borderRadius: 10,
    },
  }
];

export const initialData = {
  labels: [],
  datasets: [{
    data: [
      100
    ],
    color: (opacity = 1) => `rgba(00, 10, 102, ${opacity})`,
  }],
  legend: ["Hello chart"]
}

export default function App() {

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {

        const randomNumber = Math.floor(Math.random() * (120 - 70 + 1) + 70);
        let updatedData = [...prevData.datasets[0].data, randomNumber];

        if (updatedData.length > 10) {
          updatedData = updatedData.slice(1); // Remove the first item
        }

        return {
          ...prevData,
          datasets: [{
            ...prevData.datasets[0],
            data: updatedData,
          }],
        };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
      <View style={{ justifyContent: 'center', backgroundColor: '#cce7e8' }}>
        <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              marginVertical: 10,
              textAlign: 'center',
              fontSize: 16,
            }}>
          Demo
        </Text>
        <LineChart
            data={data}
            width={Dimensions.get('window').width}
            height={250}
            chartConfig={chartConfigs[0]}
            style={{ marginVertical: 8, borderRadius: 10 }}
        />
      </View>
  );
}

const styles = StyleSheet.create({});
