// import nc from 'next-connect'; // ✅ CORRECTED
// import multer from 'multer';
// import fs from 'fs';
// import path from 'path';
// import { google } from 'googleapis';
// import credentials from '../../google-drive-key.json';


// const uploadDir = './uploads';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // Multer config
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: uploadDir,
//     filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
//   }),
// });

// const handler = nc({
//   onError(error, req, res) {
//     console.error('❌ API Error:', error);
//     res.status(500).json({ error: `Something went wrong: ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method ${req.method} not allowed` });
//   },
// });

// // Middleware for file upload
// handler.use(upload.single('resume'));

// // POST handler
// handler.post(async (req, res) => {
//   try {
//     const file = req.file;
//     if (!file) {
//       console.warn('⚠️ No file received.');
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     console.log(`📄 Received file: ${file.originalname}`);

//     // Setup Google Auth
//     let authClient;
//     try {
//       authClient = new google.auth.GoogleAuth({
//         credentials,
//         scopes: ['https://www.googleapis.com/auth/drive.file'],
//       });
//     } catch (authError) {
//       console.error('❌ Failed to initialize GoogleAuth:', authError);
//       return res.status(500).json({ error: 'Google Auth setup failed', details: authError.message });
//     }

//     const drive = google.drive({ version: 'v3', auth: authClient });

//     try {
//       const response = await drive.files.create({
//         requestBody: {
//           name: file.originalname,
//           parents: ['1suevWemqWZbwKl7XFuZ_pReNyWoYkyPN'], // ✅ Replace with your folder ID
//         },
//         media: {
//           mimeType: file.mimetype,
//           body: fs.createReadStream(file.path),
//         },
//       });

//       console.log('✅ File uploaded to Google Drive. File ID:', response.data.id);

//       // Delete local file
//       try {
//         fs.unlinkSync(file.path);
//         console.log('🧹 Local file deleted.');
//       } catch (unlinkErr) {
//         console.warn('⚠️ Failed to delete local file:', unlinkErr);
//       }

//       return res.status(200).json({ message: 'Uploaded!', fileId: response.data.id });

//     } catch (uploadError) {
//       console.error('❌ Google Drive upload failed:', uploadError);
//       return res.status(500).json({ error: 'Drive upload failed', details: uploadError.message });
//     }

//   } catch (err) {
//     console.error('❌ Unexpected server error:', err);
//     return res.status(500).json({ error: 'Internal server error', details: err.message });
//   }
// });

// // Disable default body parser
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default handler;
