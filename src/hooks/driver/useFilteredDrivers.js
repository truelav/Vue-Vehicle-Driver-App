import {ref, computed} from 'vue';

export function useFilteredDrivers(drivers) {
    const selectedFilter = ref('')
    const filteredDrivers = computed(() => {
        if(selectedFilter.value === ""){
            return drivers.value
        } else {
            return drivers.value.filter((driver) => driver.status === selectedFilter.value )
        }
    })

    const filterOptions = [
        {value: '', name: 'All Drivers'},
        {value: 'available', name: 'Available Drivers'},
        {value: 'occupied', name: 'Occupied Drivers'},
    ]

    return {
        selectedFilter, filteredDrivers, filterOptions
    }
}