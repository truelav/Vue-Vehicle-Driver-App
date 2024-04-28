import {ref, onMounted} from 'vue';

export function useVehicles() {
    const vehicles = ref([])
    const vehicle = ref({})
    const isVehiclesLoading = ref(true)
    const isVehicleLoading = ref(false)

    const isEditVehicleLoading = ref(false)
    const isEditVehicleSuccess = ref(false)

    const isAddVehicleLoading = ref(false)
    const isDeleteVehicleLoading = ref(false)

    const fetchVehicles = async () => {
        isVehiclesLoading.value = true; 
        try {
            setTimeout(async () => {
                const response = await fetch('http://localhost:3000/vehicles?_embed=driver');
                if (!response.ok) {
                    throw new Error('Failed to fetch vehicles');
                }
                vehicles.value = await response.json();
                isVehiclesLoading.value = false; 
            }, 700)
        } catch (error) {
            console.error('Error fetching vehicles:', error);
        }  
    }

    const fetchVehicle = async (id) => {
        isVehicleLoading.value = true
        try {
            setTimeout(async () => {
                const response = await fetch(`http://localhost:3000/vehicles/${id}?_embed=driver`);
                if (!response.ok) {
                    throw new Error('Failed to fetch vehicle');
                }
                vehicle.value = await response.json();
                isVehicleLoading.value = false; 
            }, 700)
            return vehicle
        } catch (error) {
            console.error('Error fetching vehicle:', error);
        }  
    }

    const addVehicle = async (vehicle) => {
        try {
            const response = await fetch('http://localhost:3000/vehicles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vehicle)
            });
            if (!response.ok) {
                throw new Error('Failed to add vehicle');
            }
            console.log('Vehicle Added Success');
        } catch (error) {
            console.error('Error adding vehicle:', error);
        }
    } 

    const editVehicle= async (vehicle) => {

        isEditVehicleLoading.value = true
        const { driver, ...updatedVehicle } = vehicle

        try {
            const response = await fetch(`http://localhost:3000/vehicles/${vehicle.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedVehicle)
            });
            if (!response.ok) {
                throw new Error('Failed to fetch vehicles');
            }
            console.log('Driver Edited Success');
            isEditVehicleLoading.value = false
            isEditVehicleSuccess.value = true

            setTimeout(() => {
                isEditVehicleSuccess.value = false
            }, 1300)
        } catch (error) {
            console.error('Error adding driver:', error);
        }
    }

    const deleteVehicle = async (vehicle) => {
        try {
            const response = await fetch(`http://localhost:3000/vehicles/${vehicle.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error('Failed to delete vehicle');
            }
            console.log('Vehicle Deleted Success');
        } catch (error) {
            console.error('Error deleting driver:', error);
        }
    }

    onMounted(fetchVehicles)

    return {
        vehicle,
        vehicles, 
        addVehicle,
        editVehicle,
        fetchVehicle,
        deleteVehicle,
        fetchVehicles,  
        isVehicleLoading,
        isVehiclesLoading,
        isAddVehicleLoading,

        isEditVehicleLoading,
        isEditVehicleSuccess,

        isDeleteVehicleLoading,
    }
}