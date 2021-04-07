const fs = require('fs');
const path = require('path');
const pathToData = path.join(path.dirname(require.main.filename), 'data', 'data.json');

const getDataFromFile = (cb) => {
    fs.readFile(pathToData, (error, fileContent) => {
        if(error){
           return cb([]);
        }

        cb(JSON.parse(fileContent));
    });
}

module.exports = class Data{
    constructor(name, position, office, age, start, salary){
        this.name = name;
        this.position = position;
        this.occife = office;
        this.age = age;
        this.start = start;
        this.salary = salary;
    }

    save() {
        fs.readFile(pathToData, (error, fileContent) => {
            let data = [];

            if(!error){
                data = JSON.parse(fileContent);
                
            }
            

            
           //let newDataSet = []
            data.push(this);

            fs.writeFile(pathToData, JSON.stringify(data), (error) =>{
                if(!error){
                    console.log('Editing done', error);
                }else{
                    console.log('Error reading data', error);
                }
                
            });

        });
    }

    static fetchAll(cb){  

       getDataFromFile(cb);
    }
}