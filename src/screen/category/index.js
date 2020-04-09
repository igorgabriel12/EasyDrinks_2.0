import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import styles from './styles';

import {Container, ChooseCategoryButton} from '../../components';

import LottieView from 'lottie-react-native';
import DrinkAnimation from '../../assets/animations/drink_animation.json';

export default function Category({navigation}) {
  return (
    <Container noHeader>
      <View style={styles.containerHeaderCategory}>
        <View
          style={{
            position: 'absolute',
            left: -15,
            top: -18,
          }}>
          <LottieView
            source={DrinkAnimation}
            style={styles.iconLogo}
            autoPlay
            loop
          />
        </View>
        <View style={styles.containerTextHeaderCategory}>
          <Text style={styles.textEasy}>Easy</Text>
          <Text style={styles.textDrinks}>Drinks</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.bodyCategory}>
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/martini.png')}
                style={styles.iconCategory}
              />
            }
            label={'Ordinary Drink'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Ordinary_Drink',
                titleScreen: 'Ordinary Drink',
              })
            }
          />
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/cocktail.png')}
                style={styles.iconCategory}
              />
            }
            label={'Cocktail'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Cocktail',
                titleScreen: 'Cocktail',
              })
            }
          />
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/milk.png')}
                style={styles.iconCategory}
              />
            }
            label={'Milk / Float / Shake'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Milk_/_Float_/_Shake',
                titleScreen: 'Milk / Float / Shake',
              })
            }
          />
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/shot.png')}
                style={styles.iconCategory}
              />
            }
            label={'Shot'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Shot',
                titleScreen: 'Shot',
              })
            }
          />
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/cocoa.png')}
                style={styles.iconCategory}
              />
            }
            label={'Cocoa'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Cocoa',
                titleScreen: 'Cocoa',
              })
            }
          />
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/coffee-cup.png')}
                style={styles.iconCategory}
              />
            }
            label={'Coffee / Tea'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Coffee_/_Tea',
                titleScreen: 'Coffee / Tea',
              })
            }
          />
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/homemade_liqueur.png')}
                style={styles.iconCategory}
              />
            }
            label={'Homemade Liqueur'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Homemade_Liqueur',
                titleScreen: 'Homemade Liqueur',
              })
            }
          />

          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/beer.png')}
                style={styles.iconCategory}
              />
            }
            label={'Beer'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Beer',
                titleScreen: 'Beer',
              })
            }
          />
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/iced-tea.png')}
                style={styles.iconCategory}
              />
            }
            label={'Soft Drink / Soda'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Soft_Drink_/_Soda',
                titleScreen: 'Soft Drink / Soda',
              })
            }
          />
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/punch-bowl.png')}
                style={styles.iconCategory}
              />
            }
            label={'Punch / Party Drink'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Punch_/_Party_Drink',
                titleScreen: 'Punch / Party Drink',
              })
            }
          />
          <ChooseCategoryButton
            icon={
              <Image
                source={require('../../assets/icons/more.png')}
                style={styles.iconCategory}
              />
            }
            label={'Other / Unknown'}
            onPress={() =>
              navigation.navigate('Drinks', {
                category: 'Other/Unknown',
                titleScreen: 'Other / Unknown',
              })
            }
          />
        </View>
      </ScrollView>
    </Container>
  );
}
