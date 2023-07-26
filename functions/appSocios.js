const Airtable = require('airtable');
const base = new Airtable({ apiKey: `${process.env.AIRTABLE_TOKEN}` }).base(
    'app5ssUaa0Y5YNcsN'
);

function getAsociados() {

    const table = "Asociados";
    let fields = [
      "Nombre",
      "Logo",
      "Email",
      "Region",
      "Provincia",
      "Producción",
      "Tecnología de impresión",
      "Especialidad",
    ];
    const data = [];
  
    return new Promise((resolve, reject) => {
      base(table)
        .select({
          fields: fields,
          view: "Grid view",
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
  
            records.forEach(function (record) {
              //console.log('Leader: ', record.get('Name'), record.get('Last Name'));
              data.push(record.fields);
            });
  
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
          },
          function done(err) {
            if (err) {
                console.error(err);
                return;
            }
            const transformed = data.map((e) => {
                return {
                    Name: e["Nombre"],
                    Logo: e.Logo[0].url,
                    Email: e["Email"],
                    Region: e["Region"],
                    Provincia: e["Provincia"],
                    Producción: e["Producción"],
                    Tecnología: e["Tecnología de impresión"],
                    Especialidad: e["Especialidad"],
                };
            });
            return resolve(transformed);
          }
        );
    });    

}

function getAsociado( id ) {

  const data = [];
  return new Promise((resolve, reject) => {

    base("Asociados").find(id, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record._rawJson.fields);
      
      /*
      const transformed = data.map((record) => {
        return {
          Name: record["Nombre"],
          Logo: record.Logo[0].url,
          Email: record["Email"],
          Region: record["Region"],
          Provincia: record["Provincia"],
          Producción: record["Producción"],
          Tecnología: record["Tecnología de impresión"],
          Especialidad: record["Especialidad"],
        };
      });
      */
      
      return resolve(record._rawJson.fields);
    });
  });
}

module.exports = { getAsociados, getAsociado };