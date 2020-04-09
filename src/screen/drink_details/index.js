import React, {useEffect, useState, Component} from 'react';
import {View, Image, Text, ScrollView, ActivityIndicator} from 'react-native';

import styles from './styles';
import {styles as stylesDefault, colors, fonts} from '../../styles';

import {GradientContainer, Icon, CustomHeader} from '../../components';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import {getDrinkById} from '../../services';

export default function Drink_Details({route, navigation}) {
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(true);
  const {idDrink} = route.params;
  useEffect(() => {
    _onInit(idDrink);
  }, [idDrink]);

  async function _onInit(id) {
    try {
      const res = await getDrinkById(id);

      setLoading(false);

      setDrink(res.data?.drinks[0]);
    } catch (error) {
      setLoading(false);
    }
  }

  function _returnIgradients(drink) {
    let arrayIgradients = [];
    let i = 1;

    for (let [key, value] of Object.entries(drink)) {
      if (key.includes('strIngredient') && value) {
        arrayIgradients.push(
          <View key={key} style={styles.igradienteLine}>
            <Text style={styles.textInfos}>{value}</Text>

            {drink[`strMeasure${i}`] && (
              <Text style={styles.textInfos}>{drink[`strMeasure${i}`]}</Text>
            )}
          </View>,
        );
        i++;
      }
    }

    return arrayIgradients.length > 0 ? arrayIgradients : <View />;
  }
  console.log({drink});
  return (
    <GradientContainer style={{flex: 1}}>
      <ParallaxScroll
        isHeaderFixed
        headerHeight={60}
        parallaxHeight={240}
        nested
        parallaxBackgroundScrollSpeed={5}
        parallaxForegroundScrollSpeed={2.5}
        fadeOutParallaxBackground
        headerFixedBackgroundColor={colors.primary}
        renderHeader={() => (
          <CustomHeader navigation={navigation} label={drink.strDrink} />
        )}
        renderParallaxForeground={() => (
          <View
            style={{height: 240, paddingTop: 30, justifyContent: 'flex-end'}}
          />
        )}
        renderParallaxBackground={() => (
          <Image
            blurRadius={0.5}
            source={{uri: drink.strDrinkThumb}}
            style={{width: '100%', height: 240}}
          />
        )}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View style={styles.bodyWhite}>
            {loading && (
              <ActivityIndicator size="large" color={colors.primary} />
            )}

            <View style={styles.headerBody}>
              {drink.strCategory && (
                <View style={styles.labelText}>
                  <Text style={{color: '#e5b686'}}>{drink.strCategory}</Text>
                </View>
              )}

              {drink.strIBA && (
                <View style={styles.labelText}>
                  <Text style={{color: '#e5b686'}}>{drink.strIBA}</Text>
                </View>
              )}

              {drink.strAlcoholic && (
                <View style={styles.labelText}>
                  <Text style={{color: '#e5b686'}}>{drink.strAlcoholic}</Text>
                </View>
              )}

              {drink.strGlass && (
                <View style={styles.labelText}>
                  <Text style={{color: '#e5b686'}}>{drink.strGlass}</Text>
                </View>
              )}
            </View>

            <View style={styles.containerInfos}>
              <View style={styles.headerInfos}>
                <View style={styles.tick} />

                <View style={styles.containerLabelInfos}>
                  <Text style={styles.textLabelInfos}>Ingradients</Text>
                </View>
              </View>

              <View style={styles.bodyInfos}>
                <View style={{flex: 1}}>{_returnIgradients(drink)}</View>
              </View>
            </View>

            <View style={[styles.containerInfos, {marginVertical: 20}]}>
              <View style={styles.headerInfos}>
                <View style={styles.tick} />

                <View style={styles.containerLabelInfos}>
                  <Text style={styles.textLabelInfos}>Instructions</Text>
                </View>
              </View>

              {drink.strInstructions !== undefined && (
                <View style={styles.bodyInfos}>
                  {drink.strInstructions !== '' ? (
                    <Text style={styles.textInfos}>
                      {drink.strInstructions}
                    </Text>
                  ) : (
                    <Text style={styles.textInfos}> No instructions. </Text>
                  )}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </ParallaxScroll>
    </GradientContainer>
  );
}
