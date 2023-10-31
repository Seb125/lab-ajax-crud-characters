



class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    try {
      const response = await axios.get(this.BASE_URL + "/characters");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching characters:", error);
      throw error; // Optionally, you can rethrow the error to handle it elsewhere
    }
  }

  getOneRegister (id) {
    const getSingleCharacter = async () => {

      try {
    
      const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
      console.log(response)
      } catch (error) {
        console.log(error)
      }
  
      }
  
      getSingleCharacter();

  }

 

  updateOneRegister (id, data) {

    const updateCharacter = async () => {

      try {
    
      const response = await axios.patch(`${this.BASE_URL}/characters/${id}`, data);
      console.log(response)
      } catch (error) {
        console.log("Character not found")
        console.log(error)
      }
  
      }
  
      updateCharacter();

  }

  createOneRegister (data) {
    const createCharacter = async () => {

      try {
    
      const response = await axios.post(`${this.BASE_URL}/characters`, data);
      console.log(response)
      } catch (error) {

      
        console.log(error)
      }
  
      }
  
      createCharacter();
  }

  deleteOneRegister (id) {

    const deleteCharacter = async () => {

      try {
    
      const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
      console.log("Character has been successfully deleted")
      } catch (error) {

      
        console.log(error)
      }
  
      }
  
      deleteCharacter();

  }
}
