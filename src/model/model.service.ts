import {Injectable} from "@angular/core";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

@Injectable()
export class AlModel{

  public paliers : Array<Object>;

  constructor(private sqlite: SQLite){}

  createAluwaModel(){
    this.dropDatabase();
    this.createDatabase();
    this.addData();
  }

  /**
   * Create the model of aluwa
   */
  createDatabase(){
    console.log('creating database ....');
    this.sqlite.create({
      name : 'aluwa.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      db.executeSql(
        'CREATE TABLE IF NOT EXISTS palier (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT )', {})
        .then(() => console.log('TABLE CREATED palier'))
        .catch(e => console.log(e));

      db.executeSql(
        'CREATE TABLE IF NOT EXISTS niveau (id INTEGER PRIMARY KEY AUTOINCREMENT, nb_point INTEGER, nb_cauris INTEGER, animal TEXT, status BOOLEAN )', {})
        .then(() => console.log('TABLE CREATED niveau'))
        .catch(e => console.log(e));

      db.executeSql(
        'CREATE TABLE IF NOT EXISTS niveau_palier (id_palier INTEGER NOT NULL , id_niveau INTEGER NOT NULL, PRIMARY KEY (id_palier, id_niveau), CONSTRAINT fk_palier FOREIGN KEY (id_palier) REFERENCES palier (id), CONSTRAINT fk_niveau FOREIGN KEY (id_niveau) REFERENCES niveau (id) )', {})
        .then(() => console.log('TABLE CREATED niveau_palier'))
        .catch(e => console.log(e));

      db.executeSql(
        'CREATE TABLE IF NOT EXISTS cours (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, contenu TEXT, id_niveau INTEGER, CONSTRAINT fk_cours_niveau FOREIGN KEY (id_niveau) REFERENCES niveau (id) )', {})
        .then(() => console.log('TABLE CREATED cours'))
        .catch(e => console.log(e));

      db.executeSql(
        'CREATE TABLE IF NOT EXISTS exercice (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, contenu TEXT, note INTEGER, status BOOLEAN, id_niveau INTEGER, CONSTRAINT fk_exercice_niveau FOREIGN KEY (id_niveau) REFERENCES niveau (id) )', {})
        .then(() => console.log('TABLE CREATED exercice'))
        .catch(e => console.log(e));
    })
      .catch(e => console.log(e));
  }

  /**
   * Insert the data in the database
   */
  addData(){
    console.log('creating data ...');
    this.sqlite.create({
      name : 'aluwa.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql(
        "INSERT INTO palier (name) VALUES ( 'palier1')", {})
        .then((data) => console.log("INSERTED: " + JSON.stringify(data)))
        .catch(e => console.log(e));

      db.executeSql(
        "INSERT INTO palier (name) VALUES ( 'palier2')", {})
        .then((data) => console.log("INSERTED: " + JSON.stringify(data)))
        .catch(e => console.log(e));

      db.executeSql(
        "INSERT INTO palier (name) VALUES ( 'palier3')", {})
        .then((data) => console.log("INSERTED: " + JSON.stringify(data)))
        .catch(e => console.log(e));

      db.executeSql(
        "INSERT INTO palier (name) VALUES ( 'palier4')", {})
        .then((data) => console.log("INSERTED: " + JSON.stringify(data)))
        .catch(e => console.log(e));

      db.executeSql(
        "INSERT INTO palier (name) VALUES ( 'palier5')", {})
        .then((data) => console.log("INSERTED: " + JSON.stringify(data)))
        .catch(e => console.log(e));

    })
  }


  /**
   * Select all palier
   */
  selectPaliers(paliers : any){
    this.sqlite.create({
      name : 'aluwa.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql(
        "SELECT * FROM palier", {}).then((data) => {
          paliers = [];
          if(data.rows.length > 0){
            for(var i = 0; i < data.rows.length; i++) {
              paliers.push({id: data.rows.item(i).id, name: data.rows.item(i).name});
            }
          }
        }, (error) => console.log(error)
      ).catch(e => console.log(e));
    })
  }


  /**
   * Droping the database
   */
  dropDatabase(){
    console.log('deleting database ....');
    this.sqlite.deleteDatabase({
      name : 'aluwa.db',
      location: 'default'
    }).then(() => console.log('DATABASE aluwa.db DELETED'))
      .catch(e => console.log(e));
  }


}