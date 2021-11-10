const vision = require('@google-cloud/vision');

const CREDENTIALS = {
    
  
  };

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG);

// const detectLandmark = async (file_path) => {

//     let [result] = await client.landmarkDetection('landmark_one.jpeg');
//     console.log(result.landmarkAnnotations[0].annotations);
// };

// detectLandmark();

const detectText = async (file_path) => {

    let [result] = await client.textDetection(file_path);
    console.log(result.fullTextAnnotation.text);
};

detectText('text.png');
