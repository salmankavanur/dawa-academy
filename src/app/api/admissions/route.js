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
    return new Response('Error submitting admission', { status: 500 });
  }
}
