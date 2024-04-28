import {ref, onMounted, watch} from 'vue';

export function useDrivers() {
    const driver = ref({})
    const drivers = ref([])
    const isDriversLoading = ref(true)
    const isDriverLoading = ref(false)

    const isEditDriverLoading = ref(false)
    const isEditDriverSuccess = ref(false)

    const isSaveDriverLoading = ref(false)
    const isDeleteDriverLoading = ref(false)

    const fetchDrivers = async () => {
        try {
            setTimeout(async () => {
                const response = await fetch('http://localhost:3000/drivers?_embed=vehicle');
                if (!response.ok) {
                    throw new Error('Failed to fetch drivers');
                }
                drivers.value = await response.json();
                isDriversLoading.value = false; 
            }, 700)
        } catch (error) {
            console.error('Error fetching drivers:', error);
        }  
    }

    const fetchDriver = async (id) => {
        isDriverLoading.value = true
        try {
            setTimeout(async () => {
                const response = await fetch(`http://localhost:3000/drivers/${id}?_embed=vehicle`);
                if (!response.ok) {
                    throw new Error('Failed to fetch drivers');
                }
                driver.value = await response.json();
                isDriverLoading.value = false; 
            }, 700)
            return driver
        } catch (error) {
            console.error('Error fetching drivers:', error);
        }  
    }

    const saveDriver = async (driver) => {
        try {
            setTimeout(async () => {
                const response = await fetch('http://localhost:3000/drivers', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(driver)
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch vehicles');
                }
                console.log('Driver Added Success');
                isSaveDriverLoading.value = false; 
            }, 700); 
        } catch (error) {
            console.error('Error adding driver:', error);
        }
    } 

    const editDriver = async (driver) => {
        isEditDriverLoading.value = true
        try {
            const response = await fetch(`http://localhost:3000/drivers/${driver.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(driver)
            });
            if (!response.ok) {
                throw new Error('Failed to fetch vehicles');
            }
            console.log('Driver Edited Success');
            isEditDriverLoading.value = false
            isEditDriverSuccess.value = true

            setTimeout(() => {
                isEditDriverSuccess.value = false
            }, 1300)
        } catch (error) {
            console.error('Error adding driver:', error);
        }
    }

    const deleteDriver = async (driver) => {
        isDeleteDriverLoading.value = true
        try {
            const response = await fetch(`http://localhost:3000/drivers/${driver.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error('Failed to delete driver');
            }
            console.log('Driver Deleted Success');
            isDeleteDriverLoading.value = false
        } catch (error) {
            console.error('Error deleting driver:', error);
        }
    }
    
    onMounted(fetchDrivers)
    // watch(drivers)

    return {
        driver,
        drivers, 
        fetchDriver,
        fetchDrivers, 
        saveDriver, 
        editDriver,
        deleteDriver,
        isDriverLoading,
        isDriversLoading, 

        isEditDriverLoading,
        isEditDriverSuccess,
        
        isSaveDriverLoading,
        isDeleteDriverLoading
    }
}