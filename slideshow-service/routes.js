import { db } from './database/photoList.js';
import { shuffleArray } from './utils.js';
import { validate_schema } from './validationSchema.js';

const routes = function(app){
    
    // GET Request
    app.get('/:types', validate_schema, async  (req, res) => {
        try {
            let photoList = []; // Init photo list
            const types = req.params.types.split(',');
    
            types.forEach((item) => {
                if (db[item]) {
                    photoList = [...photoList, ...db[item]];
                };
            });
    
            // Only randomize photos if multiple options selected
            if (types.length > 1) {
                photoList = shuffleArray(photoList);
            };
            res.send(photoList);
        } catch (error) {
            res.send(
                '500', 
                `Internal Service Error: ${error}`
            );
        }
    });

    // Health Check
    app.get('/health_check', (req, res) => {
        res.send('OK');
    });
}

export { routes };