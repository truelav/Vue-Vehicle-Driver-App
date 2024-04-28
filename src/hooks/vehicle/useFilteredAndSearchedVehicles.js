import {ref, computed} from 'vue';

export function useFilteredAndSearchedVehicles(filteredVehicles) {
    const searchQuery = ref('')
    const filteredAndSearchedVehicles = computed(() => {
        return filteredVehicles.value.filter(vehicle => vehicle.make.toLowerCase().includes(searchQuery.value.toLowerCase()) || vehicle.model.toLowerCase().includes(searchQuery.value.toLowerCase()) )
    })
    return {
        searchQuery, filteredAndSearchedVehicles
    }
}