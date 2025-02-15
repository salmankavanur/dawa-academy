import { connectToDatabase } from '../../../lib/mongodb';
import Admission from '../../../lib/admissionModel';

export async function POST(request) {
    const formData = await request.json();
  
    try {
      await connectToDatabase();
  
      const newAdmission = new Admission(formData);
      await newAdmission.save();
  
      return new Response('Admission submitted successfully', { status: 200 });
    } catch (error) {
      // Log detailed error information to the server logs
      console.error("Error during admission submission:", error.message);  // Log the error message
      console.error("Stack Trace:", error.stack);  // Log the full stack trace for better context
  
      // Send the error message as part of the response to make it visible in the frontend
      return new Response(`Error submitting admission: ${error.message}`, { status: 500 });
    }
  }
  
