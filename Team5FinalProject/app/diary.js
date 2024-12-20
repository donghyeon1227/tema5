import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const Page10 = () => {
  const [dailyLog, setDailyLog] = useState({
    visitedPlace: '',
    peopleMet: '',
    purchasedItem: '',
    spentAmount: '',
    morningTask: '',
    afternoonTask: '',
    eveningTask: '',
    nightTask: '',
    tomorrowPlan: '',
  });

  const handleInputChange = (field, value) => {
    setDailyLog((prevLog) => ({
      ...prevLog,
      [field]: value,
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>일기</Text>

      {/* 상단 날짜 및 날씨 영역 */}
      <View style={styles.topRow}>
        <View style={styles.dateItem}>
          <Text>년</Text>
          <TextInput style={styles.dateInput} placeholder="2024" />
        </View>
        <View style={styles.dateItem}>
          <Text>월</Text>
          <TextInput style={styles.dateInput} placeholder="12" />
        </View>
        <View style={styles.dateItem}>
          <Text>일</Text>
          <TextInput style={styles.dateInput} placeholder="19" />
        </View>
        <View style={styles.dateItem}>
          <Text>요일</Text>
          <TextInput style={styles.dateInput} placeholder="화" />
        </View>
        <View style={styles.weatherIcons}>
          <Text>날씨</Text>
          <View style={styles.weatherIconsRow}>
            <Text>☀️</Text>
            <Text>☁️</Text>
            <Text>☔️</Text>
            <Text>⛄️</Text>
          </View>
        </View>
      </View>

      {/* 나의 하루 섹션 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>나의 하루</Text>
        </View>
        
        <View style={styles.gridContainer}>
          <View style={styles.gridItem}>
            <Text style={styles.gridLabel}>방문한{'\n'}장소</Text>
            <TextInput
              style={styles.gridInput}
              value={dailyLog.visitedPlace}
              onChangeText={(text) => handleInputChange('visitedPlace', text)}
            />
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridLabel}>오늘 만난{'\n'}사람</Text>
            <TextInput
              style={styles.gridInput}
              value={dailyLog.peopleMet}
              onChangeText={(text) => handleInputChange('peopleMet', text)}
            />
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridLabel}>구입한{'\n'}물건</Text>
            <TextInput
              style={styles.gridInput}
              value={dailyLog.purchasedItem}
              onChangeText={(text) => handleInputChange('purchasedItem', text)}
            />
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridLabel}>지출 금액</Text>
            <TextInput
              style={styles.gridInput}
              value={dailyLog.spentAmount}
              onChangeText={(text) => handleInputChange('spentAmount', text)}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      {/* 시간별 주요 일정 섹션 */}
      <View style={styles.section}>
        <View style={styles.timeSection}>
          <Text style={styles.timeHeader}>시각</Text>
          <Text style={styles.timeHeader}>중요한 일</Text>
        </View>
        
        <View style={styles.timeRow}>
          <Text style={styles.timeLabel}>오전{'\n'}5시 - 8시</Text>
          <TextInput
            style={styles.timeInput}
            placeholder="일어나서 한 일"
            value={dailyLog.morningTask}
            onChangeText={(text) => handleInputChange('morningTask', text)}
          />
        </View>
        
        <View style={styles.timeRow}>
          <Text style={styles.timeLabel}>오전{'\n'}8시 - 12시</Text>
          <TextInput
            style={styles.timeInput}
            placeholder="아침식사 후에 한 일"
            value={dailyLog.afternoonTask}
            onChangeText={(text) => handleInputChange('afternoonTask', text)}
          />
        </View>
        
        <View style={styles.timeRow}>
          <Text style={styles.timeLabel}>오후{'\n'}12시 - 5시</Text>
          <TextInput
            style={styles.timeInput}
            placeholder="오후에 한 일"
            value={dailyLog.eveningTask}
            onChangeText={(text) => handleInputChange('eveningTask', text)}
          />
        </View>
        
        <View style={styles.timeRow}>
          <Text style={styles.timeLabel}>오후{'\n'}5시 - 10시</Text>
          <TextInput
            style={styles.timeInput}
            placeholder="저녁식사 후에 한 일"
            value={dailyLog.nightTask}
            onChangeText={(text) => handleInputChange('nightTask', text)}
          />
        </View>
      </View>

      {/* 내일 계획 */}
      <View style={styles.section}>
        <Text style={styles.planLabel}>내일 계획</Text>
        <TextInput
          style={styles.planInput}
          multiline
          value={dailyLog.tomorrowPlan}
          onChangeText={(text) => handleInputChange('tomorrowPlan', text)}
        />
      </View>

      {/* 뇌건강을 위한 생활습관 */}
      <View style={styles.healthSection}>
        <Text style={styles.healthTitle}>뇌건강을 위한 생활습관</Text>
        <Text style={styles.healthText}>
          ✓ 집중나게 운동하세요.{'\n'}
          약간 숨이 차고 땀이 날 정도의 유산소 운동은 뇌의 혈액순환 촉진과 심혈관계 기능을 향상시킵니다.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A90E2',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateItem: {
    alignItems: 'center',
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 4,
    width: 50,
    height: 30,
    textAlign: 'center',
    marginTop: 5,
  },
  weatherIcons: {
    alignItems: 'center',
  },
  weatherIconsRow: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 8,
  },
  section: {
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
  },
  sectionHeader: {
    backgroundColor: '#A8E6CE',
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '50%',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#E8E8E8',
  },
  gridLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: '#2C3E50',
  },
  gridInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
  timeSection: {
    flexDirection: 'row',
    backgroundColor: '#A8E6CE',
    padding: 10,
  },
  timeHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    padding: 10,
  },
  timeLabel: {
    width: 100,
    fontSize: 14,
    color: '#2C3E50',
  },
  timeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 4,
    padding: 8,
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
  },
  planLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 10,
    padding: 10,
  },
  planInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 4,
    padding: 10,
    height: 80,
    backgroundColor: '#FFFFFF',
    textAlignVertical: 'top',
  },
  healthSection: {
    padding: 15,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  healthTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 10,
  },
  healthText: {
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 20,
  },
});

export default Page10;