
exports.seed = async function(knex) {
  const testData= [        
  {Make: "Honda", Model: "Civic", Year: 2008, Color: "Black", VIN: "Test", Mileage:00000 },
  {Make: "Toyota", Model: "Yaris", Year: 2010, Color: "Blue", VIN: "Test", Mileage:00000 },
  {Make: "Tesla", Model: "Model 3", Year: 2018, Color: "Chrome", VIN: "Test", Mileage:00000 }]
  // Deletes ALL existing entries
    await knex('cars').truncate()
    return knex('cars').insert(testData);
};
