const apiKey = "Nsvjdc3hvwa3ATtECth8Ji5m2B-DC1J4engCgXLO2GEJOHmdY5_e93HJ0qcsVjF-ddFsr6ExVYZt-0DgramEALgyJayREmFnaXVwU1X93bgZJZ_iUzBGddDAczfJXHYx";

const Yelp = {

  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers: {
      Authorization: `Bearer ${apiKey}`
    }}).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        console.log(jsonResponse.businesses);
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      }
    });
  }
}

export default Yelp;
