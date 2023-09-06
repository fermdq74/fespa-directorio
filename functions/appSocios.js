const Airtable = require('airtable');
const base = new Airtable({ apiKey: `${process.env.AIRTABLE_TOKEN}` }).base(
    'app5ssUaa0Y5YNcsN'
);

function getAsociados() {

    const table = "Asociados";
    let fields = [
      "ID",
      "Nombre",
      "Logo",
      "Email",
      "Comunidad Autónoma",
      "Provincia",
      "Producción",
      "Tecnología de impresión",
      "Especialidad",
      "Telefono"
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
            const results = data.map((e) => {
                return {
                    ID: e["ID"] === undefined ? null : e["ID"],
                    Name: e["Nombre"],
                    Logo: e["Logo"] === undefined ? null : e["Logo"][0].url,
                    Telefono: e["Telefono"],
                    Email: e["Email"],
                    Region: e["Comunidad Autónoma"],
                    Provincia: e["Provincia"],
                    Produccion: e["Producción"],
                    Tecnologia: e["Tecnología de impresión"],
                    Especialidad: e["Especialidad"],
                };
            });

            return resolve( {results} );
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
        return reject(err);
      }

      data.push(record.fields);

      console.log(record.fields);
      
      const transformed = data.map((record) => {
        return {
          ID: record["ID"] === undefined ? null : record["ID"],
          Name: record["Nombre"],
          Logo: record.Logo === undefined ? null : record.Logo[0].url,
          Email: record["Email"],
          Produccion: record["Producción"],
          Tecnologia: record["Tecnología de impresión"],
          Especialidad: record["Especialidad"],
          Website: record["Website"],
          Telefono: record["Telefono"],
          Contacto: record["Contacto"],
          Region: record["Comunidad Autónoma"],
          Provincia: record["Provincia"],
          Direccion: record["Direccion"],
          Descripcion: record["Descripción"],
        };
      });
      

      console.log(transformed);
      
      return resolve(transformed);
    });
  });
}

module.exports = { getAsociados, getAsociado };