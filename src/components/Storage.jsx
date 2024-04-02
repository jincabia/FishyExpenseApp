import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
    static set(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    static async get(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Error retrieving data from AsyncStorage:', error);
            return null;
        }
    }

    static async update(key, newValue) {
        try {
            const oldValue = await AsyncStorage.getItem(key);
            let mergedValue;
            if (oldValue) {
                const parsedOldValue = JSON.parse(oldValue);
                mergedValue = { ...parsedOldValue, ...newValue };
            } else {
                mergedValue = newValue;
            }
            await AsyncStorage.setItem(key, JSON.stringify(mergedValue));
            console.log(mergedValue);
            return mergedValue;
        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    }

    static delete(key) {
        return AsyncStorage.removeItem(key);
    }

    static clear() {
        return AsyncStorage.clear();
    }

    static async getAllData() {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const data = await AsyncStorage.multiGet(keys);
            return data.map(([key, value]) => {
                try {
                    let parsedValue = '';
                    if (key != 'toCode' && key != 'fromCode' && key != 'rate')
                        parsedValue = JSON.parse(value);
                   
                    return { key, value: parsedValue };
                } catch (error) {
                    console.error(`Error parsing data for key "${key}":`, error);
                    return { key, value: null };
                }
            });
        } catch (error) {
            console.error('Error retrieving data from AsyncStorage:', error);
            return [];
        }
    }
    
}

export default Storage;
