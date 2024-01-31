//canvas na tela com demais elementos

import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
  } from "react-native-gesture-handler";
  import { Canvas, Path } from "@shopify/react-native-skia";
  
  interface IPath {
    segments: String[];
    color?: string;
  }

const QuadroScreenTeste = () => {
const [paths, setPaths] = useState<IPath[]>([]);

  const pan = Gesture.Pan()
    .onStart((g) => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color: "#06d6a0",
      };
      newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
      setPaths(newPaths);
    })
    .onUpdate((g) => {
      const index = paths.length - 1;
      const newPaths = [...paths];
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${g.x} ${g.y}`);
        setPaths(newPaths);
      }
    })
    .minDistance(1);

  return (
    <ImageBackground
      source={require('../assets/cenarioBg.png')}
      style={styles.backgroundImage}
    >
      
      <GestureHandlerRootView style={styles.containerCanvas}>
      <GestureDetector gesture={pan}>
        <View style={styles.containerCanvas2}>
          <Canvas style={{ flex: 8 }}>
            {paths.map((p, index) => (
              <Path
                key={index}
                path={p.segments.join(" ")}
                strokeWidth={5}
                style="stroke"
                color={p.color}
              />
            ))}
          </Canvas>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
      

      <View style={styles.container}>
        <View style={styles.containerButtons}>
            <TouchableOpacity onPress={() => console.log('AtivCP2')} style={styles.buttonNavigation}>
                <Image source={require('../assets/btnVoltar.png')} style={styles.button}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Home')} style={styles.buttonNavigation}>
                <Image source={require('../assets/btnHome.png')} style={styles.button}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('audiodescrição')} style={styles.buttonNavigation}>
                <Image source={require('../assets/btnSom.png')} style={styles.button}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('download')} style={styles.buttonNavigation}>
                <Image source={require('../assets/btnDownload.png')} style={styles.button}/>
            </TouchableOpacity>
        </View>

        <View style={styles.containerTools}>
            <Image source={require('../assets/ferramentasGroup.png')} style={{width:83, height: 220}}/>
            <View style={styles.overlayImageTools}>
                <TouchableOpacity onPress={() => console.log('pincel')}>
                    <Image source={require('../assets/btnPincel.png')} style={styles.button}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('spray')}>
                    <Image source={require('../assets/btnSpray.png')} style={styles.button}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('balde')}>
                    <Image source={require('../assets/btnBalde.png')} style={styles.button}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('borracha')}>
                    <Image source={require('../assets/btnBorracha.png')} style={styles.button}/>
                </TouchableOpacity>
            </View>
        </View>

        <Image source={require('../assets/topBoard.png')} style={styles.topBoardImg}/>

        <Image source={require('../assets/bottomBoard.png')} style={styles.bottomBoardImg}/>

        <Image source={require('../assets/pintor.png')} style={styles.personagemImg}/>
        

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    //propriedades se for usar a tela em tamanho absoluto:
    //position: 'absolute',
    //top:15,
    //lef:1,
    //width:1005,
    //height:538,
    flex: 1,
    marginTop: 15,
  },
  container: {
    flex: 1,
    marginTop:10,
    borderWidth:3,
    //borderColor:'red',
    borderColor: 'rgba(0, 0, 0, 0)',
  },
  containerButtons:{
    borderWidth:3,
    //borderColor:'blue',
    borderColor: 'rgba(0, 0, 0, 0)',
    gap:5,
    marginTop:5,
    marginLeft:5,
    width:60,
    height:230,
  },
  button:{
    width: 50,
    height: 50,
  },
  buttonNavigation: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 60,
    width:50,
    height:50,
  },
  containerTools:{
    borderWidth:3,
    //borderColor:'green',
    borderColor: 'rgba(0, 0, 0, 0)',
    gap:5,
    marginTop:5,
    marginLeft:5,
    width:91,
    height:227,
  },
  overlayImageTools:{
    position: 'absolute',
    top: 3, 
    left: 5, 
    width: 100, 
    height: 100,
    gap:3
  },
  canvasBg:{
    position: 'absolute',
    top: 40,
    left: 80,
    width: 900,
    height: 454,
    borderWidth:3,
    borderColor: 'white'
  },
  topBoardImg:{
    position: 'absolute',
    top: 0, 
    left: 280, 
    width: 450, 
    height: 30,
  },
  bottomBoardImg:{
    position: 'absolute',
    top: 480, 
    left: 100, 
    width: 800, 
    height: 45,
  },
  personagemImg:{
    position: 'absolute',
    top: 350, 
    left: 800, 
    width: 180, 
    height: 300,
  },
  containerCanvas:{
    width:900, 
    height:454, 
    backgroundColor:"white",
    position:'absolute',
    left: 80,
    top: 40,
  },
  containerCanvas2:{
    flex:1, 
  }
});

export default QuadroScreenTeste;
