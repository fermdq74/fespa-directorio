const Airtable = require('airtable');
const base = new Airtable({ apiKey: `${process.env.AIRTABLE_TOKEN}` }).base(
    'app5ssUaa0Y5YNcsN'
);

function getColaboradores() {

    const table = "Socios Colaboradores";
    let fields = [
      "Nombre",
      "Logo",
      "Email",
      "Telefono",
      "Comunidad Autónoma",
      "Provincia",
      "Distribuidor",
      "Fabricante",
      "Tecnología de impresión"
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
                return reject(err);
            }
            const transformed = data.map((e) => {
                return {
                    Name: e["Nombre"],
                    Logo: e["Logo"] === undefined ? null : e["Logo"][0].url,
                    Telefono: e["Telefono"],
                    Email: e["Email"],
                    Region: e["Comunidad Autónoma"],
                    Provincia: e["Provincia"],
                    Distribuidor: e["Distribuidor"],
                    Tecnologia: e["Tecnología de impresión"],
                    Fabricante: e["Fabricante"],
                };
            });
            return resolve(transformed);
          }
        );
    });    

}

function getColaborador( id ) {

  const table = "Socios Colaboradores";
  const data = [];
  return new Promise((resolve, reject) => {

    base(table).find(id, function (err, record) {
      if (err) {
        console.error(err);
        return reject(err);
      }

      data.push(record._rawJson.fields);
      
      const transformed = data.map((record) => {
        return {
          ID: record["ID"],
          Name: record["Nombre"],
          Logo: record["Logo"] === undefined ? null : record["Logo"][0].url,
          Email: record["Email"],
          Distribuidor: record["Distribuidor"],
          Tecnologia: record["Tecnología de impresión"],
          Fabricante: record["Fabricante"],
          Website: record["Website"],
          Telefono: record["Telefono"],
          Contacto: record["Contacto"],
          Region: record["Comunidad Autónoma"],
          Provincia: record["Provincia"],
          Direccion: record["Direccion"],
        };
      });

      console.log(transformed);
      
      return resolve(transformed);
    });
  });
}

module.exports = { getColaboradores, getColaborador };