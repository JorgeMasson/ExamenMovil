import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import Quiz from './Pages/quiz';
import FirstQuestion from './Pages/first-question';
import SecondQuestion from './Pages/second-question';
import ThirdQuestion from './Pages/third--question';
import FourthQuestion from './Pages/fourth-question';
import FifthQuestioon from './Pages/fifth-question';


export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Quiz />} />
        <Route path="/first-question" element={<FirstQuestion />} />
        <Route path="/second-question" element={<SecondQuestion />} />
        <Route path="/third-question" element={<ThirdQuestion />} />
        <Route path="/fourth-question" element={<FourthQuestion />} />
        <Route path="/fifth-question" element={<FifthQuestioon />} />
      </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
