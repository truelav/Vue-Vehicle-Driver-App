import {ref, computed} from 'vue';

export function useFilteredVehicles(vehicles) {
    const selectedFilter = ref('')
    const filteredVehicles = computed(() => {
        if(selectedFilter.value === ""){
            return vehicles.value
        } else {
            return vehicles.value.filter((vehicle) => vehicle.status === selectedFilter.value )
        }
    })

    const filterOptions = [
        {value: '', name: 'All Vehicles'},
        {value: 'available', name: 'Available Vehicles'},
        {value: 'occupied', name: 'Occupied Vehicles'} 
    ]
    
    return {
        selectedFilter, filteredVehicles, filterOptions
    }
}