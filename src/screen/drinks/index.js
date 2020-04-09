import React, {useEffect, useState} from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  getDrinksGlass,
  getDrinksAlcoholic,
  getDrinksByCategory,
  getDrinksIgradient,
} from '../../services';

import styles from './styles';
import {styles as stylesDefault, colors, fonts} from '../../styles';

import TouchableScale from 'react-native-touchable-scale';
import {
  Icon,
  Search,
  ListEmpty,
  CardDrink,
  FilterModal,
  ButtonFilterFast,
  GradientContainer,
} from '../../components';

import {requestAllFilters} from '../../store/modules/filters/actions';

export default function Drinks({route, navigation}) {
  // State
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState('');
  const [modalVisible, setModalVisible] = useState('');
  const [fastFilter, setFastFilter] = useState('Alcoholic');
  const [filter, setFilter] = useState({filterValue: '', type: ''});
  const [arrayDrinksFilterByName, setArrayDrinksFilterByName] = useState([]);

  const dispatch = useDispatch();

  const {titleScreen, category} = route.params;
  const {arrayOfGlass, arrayOfIgradients} = useSelector(
    (state) => state.filters,
  );

  useEffect(() => {
    _onInit();
  }, []);

  async function _onInit() {
    try {
      const drinksResponse = await getDrinksByCategory(category);
      console.log({drinksResponse});
      setDrinks(drinksResponse.data?.drinks);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function _onFilter(setModal = true, filter = null) {
    setModal && _setModal();
    filter && setFilter(filter);

    setLoading(true);
    try {
      const filterValue = filter.filterValue.split(' ').join('_');
      let drinksResponse = [];
      if (filter.type === 'glass') {
        drinksResponse = await getDrinksGlass(filterValue);
      } else {
        drinksResponse = await getDrinksIgradient(filterValue);
      }

      setDrinks(drinksResponse.data?.drinks);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  function _onClear() {
    _setModal();
    setFilter({filterValue: '', type: ''});
    _setFastFilter(fastFilter);
  }

  async function _setFastFilter(fastFilter = 'Alcoholic') {
    setFastFilter(fastFilter);
    if (fastFilter === 'Alcoholic') {
      _refresh();
    } else {
      _getDrinksByFilterAlcoholic(fastFilter);
    }

    setNameFilter('');
  }

  // Ok
  async function _getDrinksByFilterAlcoholic(fastFilter) {
    setLoading(true);
    try {
      const res = await getDrinksAlcoholic(fastFilter);
      setLoading(false);
      setDrinks(res.data?.drinks);
    } catch (error) {
      setLoading(false);
    }
  }

  // Ok
  async function _refresh() {
    setLoading(true);
    try {
      const res = await getDrinksByCategory(category);
      setLoading(false);
      setDrinks(res.data?.drinks);
    } catch (error) {
      setLoading(false);
    }
  }

  function _setModal() {
    setModalVisible(!modalVisible);

    if (arrayOfIgradients.length === 0 || arrayOfGlass.length === 0) {
      dispatch(requestAllFilters());
    }
  }

  function _filterDrinkByName(nameFilter = '') {
    const arrayDrinksFilterByName = drinks.filter((drink) => {
      return drink.strDrink.toLowerCase().includes(nameFilter.toLowerCase());
    });
    setNameFilter(nameFilter);
    setArrayDrinksFilterByName(arrayDrinksFilterByName);
  }

  return (
    <GradientContainer style={{flex: 1}}>
      <View style={styles.containerHeader}>
        <View style={stylesDefault.defaultLine}>
          <TouchableScale
            onPress={() => navigation.pop()}
            style={styles.buttonBack}
            activeScale={0.98}>
            <Icon name="left-arrow" size={15} style={{color: '#FFF'}} />
          </TouchableScale>
          <View style={{marginLeft: 10}}>
            <Text style={styles.textTitleScreen}>{titleScreen}</Text>
          </View>
        </View>
        <Search
          onChangeText={_filterDrinkByName}
          value={nameFilter}
          style={styles.searchArea}
        />
      </View>
      <View style={styles.bodyWhite}>
        <View style={styles.containerFastFilter}>
          {filter.filterValue === '' ? (
            <>
              <ButtonFilterFast
                label={'Alcoholic'}
                style={styles.buttonFastFilter}
                onPress={() => _setFastFilter('Alcoholic')}
                checked={fastFilter === 'Alcoholic'}
              />
              <ButtonFilterFast
                label={'Non Alcoholic'}
                style={styles.buttonFastFilter}
                onPress={() => _setFastFilter('Non_Alcoholic')}
                checked={fastFilter === 'Non_Alcoholic'}
              />
              <ButtonFilterFast
                label={'Optional Alcohol'}
                style={styles.buttonFastFilter}
                onPress={() => _setFastFilter('Optional_alcohol')}
                checked={fastFilter === 'Optional_alcohol'}
              />
            </>
          ) : (
            <ButtonFilterFast
              label={filter.filterValue}
              style={styles.buttonFastFilter}
              onPress={_setModal}
              checked={true}
            />
          )}
        </View>
        <FlatList
          data={nameFilter !== '' ? arrayDrinksFilterByName : drinks}
          refreshing={loading}
          onRefresh={_refresh}
          ListEmptyComponent={() => {
            if (!loading) {
              return <ListEmpty loading={loading} />;
            } else {
              return <View />;
            }
          }}
          renderItem={({item, index}) => (
            <CardDrink
              key={index}
              onPress={() =>
                navigation.navigate('Drink_Details', {
                  idDrink: item.idDrink,
                })
              }
              item={item}
              index={index}
            />
          )}
        />
        <TouchableScale
          onPress={_setModal}
          style={styles.filterButton}
          activeScale={0.98}>
          <Image
            tintColor={colors.primary}
            source={require('../../assets/icons/filter.png')}
            style={styles.iconFilter}
          />
        </TouchableScale>
      </View>
      <FilterModal
        filter={filter}
        _onFilter={_onFilter}
        _onClear={_onClear}
        _setModal={_setModal}
        modalVisible={modalVisible}
      />
    </GradientContainer>
  );
}
