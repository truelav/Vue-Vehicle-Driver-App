import {ref, computed} from 'vue';

export function useFilteredAndSearchedDrivers(filteredDrivers) {
    const searchQuery = ref('')
    const filteredAndSearchedDrivers = computed(() => {
        return filteredDrivers.value.filter(driver => driver.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || driver.phone_number.toLowerCase().includes(searchQuery.value.toLowerCase()) )
    })
    return {
        searchQuery, filteredAndSearchedDrivers
    }
}