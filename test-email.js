import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_eox73kx';
const TEMPLATE_ID = 'ptp2crc';
const PUBLIC_KEY = 'XTyI25B_tOx2wQ0xi';

async function test() {
  try {
    emailjs.init({ publicKey: PUBLIC_KEY });
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      user_name: 'Test',
      user_email: 'test@example.com',
      message: 'Test message'
    });
    console.log('Success');
  } catch (e) {
    console.error('Error:', e);
  }
}

test();
