class Corona {
  async get(url1, url2) {
    const caseResponse = await fetch(url1);
    const totalResponse = await fetch(url2);

    const cases = await caseResponse.json();
    const total = await totalResponse.json();

    return {
      cases,
      total
    };
  }

  async getCountrycases(value) {
    // console.log(value);

    if (value == 2) {
      const indiaResponse = await fetch(
        "https://api.covid19india.org/data.json"
      );

      const indiaData = await indiaResponse.json();
      return {
        indiaData
      };
    } else {
      const usaResponse = await fetch("https://corona.lmao.ninja/v2/states");

      const usaData = await usaResponse.json();
      return {
        usaData
      };
    }
  }

  async getCountry(country) {
    const counResponse = await fetch(
      `https://corona.lmao.ninja/v2/countries/${country}`
    );

    const countryData = await counResponse.json();

    return {
      countryData
    };
  }
}
