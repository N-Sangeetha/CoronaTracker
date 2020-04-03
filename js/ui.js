class UserInt {
  showCases(cases) {
    let output = "";

    cases.forEach(function(data) {
      output += `
          <tr>
          <td>${data.country}</td>
          <td>${data.cases}</td>
          <td>${data.recovered}</td>
          <td>${data.deaths}</td>
          </tr>
        `;
    });

    document.getElementById("searchcountry").style.display = "block";

    // Output cases
    document.getElementById("case-view").innerHTML = output;
    document.getElementById("statistic-name").innerHTML = "Country ";
    document.getElementById("statistic-name-th").innerHTML = "Country ";
  }

  showUsa(cases) {
    console.log(cases);
    let output = "";
    let totalDeath = 0;
    let totalConfirmed = 0;
    let totalRecovered = 0;

    cases.forEach(function(data) {
      output += `
          <tr>
          <td>${data.state}</td>
          <td>${data.cases}</td>
          <td>${data.active}</td>
          <td>${data.deaths}</td>
          </tr>
        `;
      totalDeath += data.deaths;
      totalConfirmed += data.cases;
      totalRecovered += data.cases - (data.active + data.deaths);
    });
    console.log(totalRecovered);

    const recoveredRate = (totalRecovered / totalConfirmed) * 100;
    const deathRate = (totalDeath / totalConfirmed) * 100;

    document.getElementById("tconfirm").innerHTML = totalConfirmed;
    document.getElementById("trecover").innerHTML = totalRecovered;
    document.getElementById("tdeaths").innerHTML = totalDeath;
    document.getElementById("rerate").innerHTML = `${recoveredRate.toFixed(
      2
    )}%`;
    document.getElementById("derate").innerHTML = `${deathRate.toFixed(2)}%`;

    document.getElementById("searchcountry").style.display = "none";

    // Output cases
    document.getElementById("case-view").innerHTML = output;
    document.getElementById("statistic-name").innerHTML = "State ";
    document.getElementById("statistic-name-th").innerHTML = "State ";
  }

  showIndia(cases) {
    let statewise = cases.statewise;
    let output = "";

    let totalDeaths = 0;
    let totalConfirmed = 0;
    let totalRecovered = 0;

    statewise.forEach(function(data, index) {
      if (index < 1) {
        totalConfirmed = data.confirmed;
        totalRecovered = data.recovered;
        totalDeaths = data.deaths;
      } else {
        output += `
          <tr>
          <td>${data.state}</td>
          <td>${data.confirmed}</td>
          <td>${data.recovered}</td>
          <td>${data.deaths}</td>
          </tr>
        `;
      }
    });

    const recoveredRate = (totalRecovered / totalConfirmed) * 100;
    const deathRate = (totalDeaths / totalConfirmed) * 100;

    // Output cases
    document.getElementById("tconfirm").innerHTML = totalConfirmed;
    document.getElementById("trecover").innerHTML = totalRecovered;
    document.getElementById("tdeaths").innerHTML = totalDeaths;
    document.getElementById("rerate").innerHTML = `${recoveredRate.toFixed(
      2
    )}%`;
    document.getElementById("derate").innerHTML = `${deathRate.toFixed(2)}%`;

    document.getElementById("case-view").innerHTML = output;

    document.getElementById("searchcountry").style.display = "none";

    document.getElementById("statistic-name").innerHTML = "State ";
    document.getElementById("statistic-name-th").innerHTML = "State ";
  }

  //show country cases
  showCase(data) {
    let output = "";

    output += `
          <tr>
          <td>${data.country}</td>
          <td>${data.cases}</td>
          <td>${data.recovered}</td>
          <td>${data.deaths}</td>
          </tr>
        `;

    // Output cases
    document.getElementById("case-view").innerHTML = output;
  }

  showTotal(total) {
    // console.log(total);
    const recoveredRate = (total.recovered / total.cases) * 100;
    const deathRate = (total.deaths / total.cases) * 100;
    // console.log(recoveredRate);
    document.getElementById("tconfirm").innerHTML = total.cases;
    document.getElementById("trecover").innerHTML = total.recovered;
    document.getElementById("tdeaths").innerHTML = total.deaths;
    document.getElementById("rerate").innerHTML = `${recoveredRate.toFixed(
      2
    )}%`;
    document.getElementById("derate").innerHTML = `${deathRate.toFixed(2)}%`;
  }

  showError(errmsg) {
    document.getElementById("case-view").innerHTML = "";
    document.getElementById("errmsg").innerHTML = errmsg;
  }
}
