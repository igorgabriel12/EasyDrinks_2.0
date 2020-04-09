import React, {useState} from 'react';
import {
  View,
  Modal,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

import {useSelector} from 'react-redux';

import styles from './styles';

import {ButtonFilterFast} from '..';
import {fonts, colors} from '../../styles';

import TouchableScale from 'react-native-touchable-scale';
export const FilterModal = (props) => {
  const {modalVisible = false, filter = {}} = props;

  // State
  const [temporaryFilter, setTemporaryFilter] = useState(filter);
  const [glassFilter, setGlassFilter] = useState('');
  const [igradienteFilter, setIgradienteFilter] = useState('');

  const {arrayOfGlass, arrayOfIgradients} = useSelector(
    (state) => state.filters,
  );

  function _toogleModal() {
    setGlassFilter('');
    setTemporaryFilter(filter);
    setIgradienteFilter('');
    props._setModal();
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={_toogleModal}>
      <TouchableWithoutFeedback onPress={_toogleModal} useForeground>
        <View style={styles.containerBlack}>
          <TouchableWithoutFeedback onPress={() => false} useForeground>
            <View style={styles.containerWhite}>
              <View style={{flex: 1}}>
                <View style={styles.containerHeaderModal}>
                  <Text style={styles.textLabelInfos}>Filter by: </Text>
                  <TouchableScale
                    onPress={() => {
                      if (temporaryFilter.filterValue !== '') {
                        setGlassFilter('');
                        setIgradienteFilter('');
                        setTemporaryFilter({filterValue: '', type: ''});
                        props._onClear();
                      }
                    }}
                    activeScale={0.99}
                    style={styles.buttonClearFilter}>
                    <Text
                      style={[
                        styles.textClearFilter,
                        {
                          color:
                            temporaryFilter.filterValue !== ''
                              ? colors.primary
                              : '#ddd',
                        },
                      ]}>
                      Clear Filter
                    </Text>
                  </TouchableScale>
                </View>
                <View>
                  <View style={styles.headerInfos}>
                    <View style={styles.tick} />
                    <View style={styles.containerLabelInfos}>
                      <Text style={styles.textLabelInfos}>Glass:</Text>
                      <View style={{color: '#888', height: 30}}>
                        <TextInput
                          style={styles.searchIgradiente}
                          value={glassFilter}
                          onChangeText={setGlassFilter}
                          placeholder={'Ex: Collins glass'}
                        />
                      </View>
                    </View>
                  </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator>
                    {arrayOfGlass && (
                      <>
                        {arrayOfGlass.length === 0 && (
                          <View style={styles.containerLoading}>
                            <ActivityIndicator
                              size="small"
                              color={colors.primary}
                            />
                          </View>
                        )}
                        <View style={styles.containerListOfGlass}>
                          {arrayOfGlass
                            .filter((item) =>
                              item.strGlass
                                .toLowerCase()
                                .includes(glassFilter.toLocaleLowerCase()),
                            )
                            .map((item) => (
                              <ButtonFilterFast
                                label={item.strGlass}
                                style={styles.buttonFastFilter}
                                onPress={() =>
                                  setTemporaryFilter({
                                    filterValue: item.strGlass,
                                    type: 'glass',
                                  })
                                }
                                colorNoChecked={'#F0F0F0'}
                                checked={
                                  item.strGlass === temporaryFilter.filterValue
                                }
                              />
                            ))}
                        </View>
                      </>
                    )}
                  </ScrollView>
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.headerInfos}>
                    <View style={styles.tick} />
                    <View style={styles.containerLabelInfos}>
                      <Text style={styles.textLabelInfos}>Igradient:</Text>
                      <View style={{color: '#888', height: 30}}>
                        <TextInput
                          style={styles.searchIgradiente}
                          value={igradienteFilter}
                          onChangeText={setIgradienteFilter}
                          placeholder={'Ex: Vodka'}
                        />
                      </View>
                    </View>
                  </View>
                  <ScrollView contentContainerStyle={{width: '100%'}}>
                    <View style={[styles.containerListOfIgradients]}>
                      {arrayOfIgradients && (
                        <>
                          {arrayOfIgradients.length === 0 && (
                            <View style={styles.containerLoading}>
                              <ActivityIndicator
                                size="small"
                                color={colors.primary}
                              />
                            </View>
                          )}
                          {arrayOfIgradients
                            .filter((item) =>
                              item.strIngredient1
                                .toLowerCase()
                                .includes(igradienteFilter.toLocaleLowerCase()),
                            )
                            .map((item) => (
                              <ButtonFilterFast
                                label={item.strIngredient1}
                                style={styles.buttonFastFilter}
                                colorNoChecked={'#F0F0F0'}
                                onPress={() =>
                                  setTemporaryFilter({
                                    filterValue: item.strIngredient1,
                                    type: 'igradient',
                                  })
                                }
                                checked={
                                  item.strIngredient1 ===
                                  temporaryFilter.filterValue
                                }
                              />
                            ))}
                        </>
                      )}
                    </View>
                  </ScrollView>
                </View>
              </View>
              <View style={styles.footerModal}>
                <TouchableScale
                  onPress={_toogleModal}
                  activeScale={0.99}
                  style={styles.btnCancel}>
                  <Text style={styles.textCancel}>Cancel</Text>
                </TouchableScale>
                <TouchableScale
                  onPress={() => {
                    props._onFilter(true, temporaryFilter);
                  }}
                  activeScale={0.99}
                  style={styles.btnApplyFiter}>
                  <Text style={styles.textApplyFilter}>Apply Filter</Text>
                </TouchableScale>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
